import { useSelector } from "react-redux"

export const useAuth = () => {
  const { email, displayName, token, loading, photoURL, init } = useSelector(
    (state) => state.user
  )
  if (!email) {
    return {
      isAuth: !!email,
      email: null,
      displayName: null,
      token: null,
      loading,
      photoURL: null,
      init
    }
  }
  return {
    isAuth: !!email,
    email,
    displayName,
    token,
    loading,
    photoURL,
    init
  }
}
