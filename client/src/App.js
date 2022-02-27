import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { Loader } from "./commons/Loader/Loader"
import { AppRouter } from "./component/AppRouter"
import { useAuth } from "./hooks/useAuth"
import { initialize } from "./store/reducers/userReducer"

function App() {
  const dispatch = useDispatch()

  const { init } = useAuth()

  useEffect(() => {
    dispatch(initialize())
  }, [])


  return <BrowserRouter><AppRouter /> </BrowserRouter>
}

export default App
