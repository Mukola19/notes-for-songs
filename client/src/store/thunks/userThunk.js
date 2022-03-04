import { changeLoading, removeUser, setInit, setUser } from "../reducers/userReducer"
import { getSongs } from "./songsThunk"
import { userApi } from "../../API/userApi"
import { setSongs } from "../reducers/songsReducer"


export const initialize = () => async dispatch => {
    try {
      const user = await userApi.refresh()
      dispatch(setUser(user))
      dispatch(getSongs())
    } catch (e) {
      dispatch(setInit())
    }
  }
  
  export const registration = (form) => async dispatch => {
    dispatch(changeLoading(true))
    const user = await userApi.registration(form)
    dispatch(setUser(user))
    dispatch(getSongs())
    dispatch(changeLoading(true))
  }
  
  export const login = (form) => async dispatch => {
    dispatch(changeLoading(true))
    const user = await userApi.login(form)
    dispatch(setUser(user))
    dispatch(getSongs())
    dispatch(changeLoading(false))
  }
  
  export const logout = () => async dispatch => {
    const user = await userApi.logout()
    dispatch(removeUser())
    dispatch(setSongs([]))
  }
  