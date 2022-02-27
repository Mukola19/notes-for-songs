import { createSlice } from "@reduxjs/toolkit"
import { songApi } from "../../API/songApi"
import { changeLoading } from "./userReducer"
// import history from "../../utils/history"


const initialState = {
  array: [],
  count: null,
  song: {},
}

const songsReducer = createSlice({
  name: "songsReducer",
  initialState,
  reducers: {
    setSongs: (state, { payload }) => {
      state.array = payload
      state.count = state.array.length
    },

    setSong: (state, { payload }) => {
      state.song = payload
    },
  },
})

const { actions, reducer } = songsReducer

export const { setSongs, setSong } = actions

export default reducer

// Thunk

export const getSongs = () => async (dispatch) => {
  dispatch(changeLoading(true))
  songApi.getSongs()
    .then((songs) => {
      dispatch(setSongs(songs))
    })
    .catch((e) => console.log(e))
  dispatch(changeLoading(false))

}

export const getOneSong = (songId) => async (dispatch) => {
  dispatch(changeLoading(true))
  try {
    const song = await songApi.getOneSong(songId)
    dispatch(setSong(song))
  dispatch(changeLoading(false))
  } catch (e) {
    console.log(e)
  }
}

export const createSong = (form, push) => async (dispatch) => {
  dispatch(changeLoading(true))
  try {
    const song = await songApi.create(form)
    dispatch(setSong(song))
    push('/song/' + song.id)
    dispatch(changeLoading(false))
    dispatch(getSongs())
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export const updateSong = (form, push) => async (dispatch) => {
  try {
    const song = await songApi.update(form)
    dispatch(setSong(song))
    push('/song/' + song.id)
    dispatch(getSongs())
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export const deleteSong = (songId) => async (dispatch) => {
  try {
    const data = await songApi.delete(songId)
    dispatch(setSong({}))
    dispatch(getSongs())
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}
