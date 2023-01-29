import { changePhotoUrl, removeUser, setUser } from './userReducer'
import { userApi } from '../../API/userApi'
import { setSongs } from '../songs/songsReducer'
import { changeLoading, setInit } from '../app/appReducer'

export const registration = (form) => async (dispatch) => {
  try {
    dispatch(changeLoading(true))
    const user = await userApi.registration(form)
    dispatch(setUser(user))
    dispatch(changeLoading(true))
  } catch (e) {
    alert(e.response.data.message)
    dispatch(changeLoading(true))
  }
}

export const login = (form) => async (dispatch) => {
  try {
    dispatch(changeLoading(true))
    const user = await userApi.login(form)
    dispatch(setUser(user))
    dispatch(changeLoading(false))
  } catch (e) {
    alert(e.response.data.message)
    dispatch(changeLoading(false))
  }
}

export const logout = () => async (dispatch) => {
  await userApi.logout()
  dispatch(removeUser())
  dispatch(setSongs([]))
}

export const updatePhoto = (photo) => async (dispatch) => {
  try {
    dispatch(changeLoading(true))
    const data = await userApi.updatePhotoUrl(photo)
    dispatch(changePhotoUrl(data.photoUrl))

    dispatch(changeLoading(false))
  } catch (e) {
    alert(e.response.data.message)
    dispatch(changeLoading(false))
  }
}

export const removePhoto = () => async (dispatch) => {
  try {
    dispatch(changeLoading(true))
    await userApi.removePhotoUrl()
    dispatch(changePhotoUrl(''))
    dispatch(changeLoading(false))
  } catch (e) {
    alert(e.response.data.message)
    dispatch(changeLoading(false))
  }
}
