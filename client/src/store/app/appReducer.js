import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: {
    isError: false,
    message: '',
  },
  init: false,
  message: '',
}

const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    changeLoading: (state, { payload }) => {
      state.loading = payload
    },
    setInit: (state) => {
      state.init = true
    },
    setMessage: (state, { payload }) => {
      state.message = payload
    },
    addError: (state, { payload }) => {
      const error = payload.response.data.message
      if (error) {
        state.error.message = error
        state.error.isError = true
        return
      }
      state.error = 'Сталася помилка'
    },
    removeError: state => {
      state.error.message = ''
      state.error.isError = false
    },
  },
})

const { actions, reducer } = appReducer

export const { changeLoading, setInit, setMessage, addError, removeError } = actions

export default reducer
