import Fuse from "fuse.js"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  stateContent: [],
  newStateContent: [],
  prewText: {},
}

const headerReselay = createSlice({
  name: "headerReselay",
  initialState,
  reducers: {
    showText: (state, { payload }) => {
      state.stateContent.forEach((e) => {
        if (e.id == payload) {
          state.prewText = e
          state.newStateContent = []
        }
      })
    },
    searchText: (state, { payload }) => {
      const fuse = new Fuse(state.stateContent, {
        keys: ["name"],
      })
      state.newStateContent = []
      fuse.search(payload).forEach((e) => {
        state.prewText = {}
        state.newStateContent.push(e.item)
      })
    },
    addSongFunc: (state, { payload }) => {
      
      state.stateContent.push(payload)
    }
  },
})

const { actions, reducer } = headerReselay

export const { showText, searchText, addSongFunc } = actions

export default reducer
