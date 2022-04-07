import { createSlice } from "@reduxjs/toolkit"
import { userApi } from "../../API/userApi"
import { getFolders } from "../folders/foldersThunk"
import { setUser } from "../user/userReducer"

const initialState = {
  loading: false,
  error: {
    isError: false,
    message: "",
  },
  initiated: false,
  message: "",
  mode: "dark",
}

const appReducer = createSlice({
  name: "appReducer",
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
      state.error = "Сталася помилка"
    },
    removeError: (state) => {
      state.error.message = ""
      state.error.isError = false
    },
    setMode: (state, { payload }) => {
      state.mode = payload
    },
    setInitiated: (state, { payload }) => {
      state.initiated = payload
    },
  },
})

const { actions, reducer } = appReducer

export const {
  changeLoading,
  setInit,
  setMessage,
  addError,
  removeError,
  setMode,
  setInitiated,
} = actions

export default reducer

export const initialize = () => async (dispatch) => {
  try {
    dispatch(requireMode())
    const user = await userApi.refresh()
    dispatch(setUser(user))
    dispatch(getFolders())
    dispatch(setInitiated(true))
  } catch (error) {
    dispatch(setInitiated(true))
  }
}

export const requireMode = () => (dispatch) => {
  const mode = localStorage.getItem("mode")
  if (mode) {
    dispatch(setMode(mode))
  }
}

export const changeMode = (mode) => (dispatch) => {
  localStorage.setItem("mode", mode)
  dispatch(setMode(mode))
}
