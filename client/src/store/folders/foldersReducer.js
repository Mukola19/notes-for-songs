import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  array: [],
  count: null,
  newFolder: {}
}

const foldersReducer = createSlice({
  name: "foldersReducer",
  initialState,
  reducers: {
    setFolders: (state, { payload }) => {
      state.array = payload
      state.count = state.array.length
    },

    setFolder: (state, { payload }) => {
      state.newFolder = payload
      state.array.forEach( i => {
        if(i.id === payload.id) {
          i.name = payload.name
           return
        } 
      })
      state.array.unshift(payload)
    },
  },
})

const { actions, reducer } = foldersReducer

export const { setFolders, setFolder } = actions

export default reducer
