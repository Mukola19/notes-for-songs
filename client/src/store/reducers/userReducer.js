import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  email: null,
  displayName: null,
  photoURL: null,
  token: null,
  loading: false,
  error: null,
  init: false,
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email
      state.displayName = payload.displayName
      state.token = payload.accessToken
      state.photoURL = payload.photoURL
    },
    removeUser: (state) => {
      state.email = null
      state.displayName = null
      state.token = null
      state.photoURL = null
    },
    changeLoading: (state, { payload }) => {
      state.loading = payload
    },
    setInit: (state) => {
      state.init = true
    },
  },

  productReleaseUpdatingError: (state, action) => {
    state.updating = 'failed'
    state.error = action.payload.error
  },
})

const { actions, reducer } = userReducer

export const {
  productReleaseUpdatingError,
  setUser,
  removeUser,
  changeLoading,
  setInit,
} = actions

export default reducer
