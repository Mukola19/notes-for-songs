import { setSong, setSongs } from './songsReducer'
import { songApi } from "../../API/songApi"
import { changeLoading, addError } from '../app/appReducer'
import { getFolders } from '../folders/foldersThunk'





export const requestSongs = (folderId) => async dispatch => {
  try {
    dispatch(changeLoading(true))
    const songs = await songApi.getSongs(folderId)
    dispatch(setSongs(songs))
  } catch (e) {
    dispatch(addError(e))
  }
  dispatch(changeLoading(false))
}

export const getOneSong = (songId) => async dispatch => {
  try {
  dispatch(changeLoading(true))
    const song = await songApi.getOneSong(songId)
    dispatch(setSong(song))
    dispatch(changeLoading(false))
  } catch (e) {
    console.log(e)
  }
  dispatch(changeLoading(false))

}

export const createSong = (form, push) => async dispatch => {
  try {
  dispatch(changeLoading(true))
    const song = await songApi.create(form)
    dispatch(setSong(song))
    push('/song/' + song.id)
    dispatch(changeLoading(false))
    dispatch(requestSongs())
    dispatch(getFolders())
  } catch (e) {
    console.error(e)
  dispatch(changeLoading(false))

  }

}

export const updateSong = (form, push) => async dispatch => {
  try {
    dispatch(changeLoading(true))
    const song = await songApi.update(form)
    dispatch(setSong(song))
    push('/song/' + song.id)
    dispatch(requestSongs())
    dispatch(getFolders())
  } catch (e) {
    console.error(e)
  }
  dispatch(changeLoading(false))

}

export const deleteSong = (songId, push) => async dispatch => {
  try {
    const data = await songApi.delete(songId)
    dispatch(setSong({}))
    dispatch(requestSongs())
    push('/songs')
  } catch (e) {
    console.error(e)
  }
}
