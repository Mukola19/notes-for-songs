import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  email: null,
  displayName: null,
  photoUrl: null,
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
      state.photoUrl = payload.photoUrl
      state.isAuth = true
    },
    removeUser: (state) => {
      state.email = null
      state.displayName = null
      state.token = null
      state.photoUrl = null
      state.isAuth = false
    },
    changePhotoUrl: (state, { payload }) => {
      state.photoUrl = payload
    }
  }
})

const { actions, reducer } = userReducer

export const {
  productReleaseUpdatingError,
  setUser,
  removeUser,changePhotoUrl
} = actions

export default reducer
