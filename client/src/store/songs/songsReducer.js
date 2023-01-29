import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  array: [],
  count: null,
  song: {},
}

const songsReducer = createSlice({
  name: 'songsReducer',
  initialState,
  reducers: {
    setSongs: (state, { payload }) => {
      state.array = payload
      state.count = state.array.length
    },

    setSong: (state, { payload }) => {
      state.song = payload
    },
    clearOneSong: state => {
      state.song = {}
    },

    clearSongs: state => {
      state.array = []
    }
  },
})

const { actions, reducer } = songsReducer

export const { setSongs, setSong ,clearOneSong, clearSongs} = actions

export default reducer
