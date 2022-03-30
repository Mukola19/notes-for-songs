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
      state.array.push(payload)
      state.newFolder = payload
    },
  },
})

const { actions, reducer } = foldersReducer

export const { setFolders, setFolder } = actions

export default reducer
