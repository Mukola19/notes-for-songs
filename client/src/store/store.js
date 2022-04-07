import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import user from "./user/userReducer"
import songs from "./songs/songsReducer"
import folders from "./folders/foldersReducer"
import app from "./app/appReducer"

const reducer = {
    user,
    songs,
    app,
    folders
    
}

const middleware =[ ...getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})]


export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
})
