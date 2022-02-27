import { $authHost } from "."

class UserApi {
  async registration(form) {
    const res = await $authHost.post("/user/registration", form)
    localStorage.setItem('accessToken',res.data.tokens.accessToken )
    return res.data
  }

  async login(form) {
    const res = await $authHost.post("/user/login", form)
    localStorage.setItem('accessToken',res.data.tokens.accessToken )

    return res.data
  }


  async refresh() {
    const res = await $authHost.get("/user/refresh")
    localStorage.setItem('accessToken',res.data.tokens.accessToken )

    return res.data
  }


  
  async logout() {
    const res = await $authHost.get("/user/logout")
    return res.data
  }
  
}

export const userApi = new UserApi()



