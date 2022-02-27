import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import user from "./reducers/userReducer"
import songs from "./reducers/songsReducer"

const reducer = {
    user,
    songs
    
}

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
})
