import * as axios from "axios"



const $authHost = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL + "/api",
})

$authHost.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
  return config
})

$authHost.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if ( 
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/refresh`, { withCredentials: true })
        localStorage.setItem('accessToken',res.data.tokens.accessToken )
        return $authHost.request(originalRequest)
      } catch (e) {
        // return $authHost.request({ message: 'Не Aвторизований'})
      }
    }
    throw error
  }
)

export { $authHost }
