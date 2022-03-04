import { setSong, setSongs } from '../reducers/songsReducer'
import { changeLoading} from "../reducers/userReducer"
import { songApi } from "../../API/songApi"



export const getSongs = () => async dispatch => {
  try {
    dispatch(changeLoading(true))
    const songs = await songApi.getSongs()
    dispatch(setSongs(songs))
  } catch (e) {
    console.log(e)
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
    dispatch(getSongs())
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
    dispatch(getSongs())
  } catch (e) {
    console.error(e)
  }
  dispatch(changeLoading(false))

}

export const deleteSong = (songId, push) => async dispatch => {
  try {
    const data = await songApi.delete(songId)
    dispatch(setSong({}))
    dispatch(getSongs())
    push('/songs')
  } catch (e) {
    console.error(e)
  }
}
