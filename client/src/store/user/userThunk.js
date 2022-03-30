import {  removeUser, setUser } from "./userReducer"
import { requestSongs } from "../songs/songsThunk"
import { userApi } from "../../API/userApi"
import { setSongs } from "../songs/songsReducer"
import { changeLoading, setInit } from "../app/appReducer"
import { getFolders } from "../folders/foldersThunk"






export const initialize = () => async dispatch => {
      const user = await userApi.refresh()
      dispatch(setUser(user))
      dispatch(getFolders())
  
  }
  
  export const registration = (form) => async dispatch => {
    dispatch(changeLoading(true))
    const user = await userApi.registration(form)
    dispatch(setUser(user))
    dispatch(requestSongs())
    dispatch(changeLoading(true))
  }
  
  export const login = (form) => async dispatch => {
    dispatch(changeLoading(true))
    const user = await userApi.login(form)
    dispatch(setUser(user))
    dispatch(requestSongs())
    dispatch(changeLoading(false))
  }
  
  export const logout = () => async dispatch => {
    const user = await userApi.logout()
    dispatch(removeUser())
    dispatch(setSongs([]))
  }
  