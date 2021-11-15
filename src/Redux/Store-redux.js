import { combineReducers, createStore } from "redux"
import  headerReducer from "./Reducer/HeaderReducer"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"




const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const store = configureStore({
  reducer: { bigState:headerReducer },
  middleware,
   devTools: process.env.NODE_ENV !== 'production',
})

