import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  email: null,
  displayName: null,
  photoURL: null,
  token: null,
  isAuth: false
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
      state.isAuth = true
    },
    removeUser: (state) => {
      state.email = null
      state.displayName = null
      state.token = null
      state.photoURL = null
      state.isAuth = false

    }
  }
})

const { actions, reducer } = userReducer

export const {
  productReleaseUpdatingError,
  setUser,
  removeUser,
} = actions

export default reducer
