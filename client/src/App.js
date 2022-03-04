import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./component/AppRouter"
import { useAuth } from "./hooks/useAuth"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"
import { initialize } from "./store/thunks/userThunk"

function App() {
  const dispatch = useDispatch()

  const { init } = useAuth()

  useEffect(() => {
    dispatch(initialize())
  }, [])

  const theme = createTheme({
    palette: {
      textColor: {
        main: "rgb(221, 217, 199)",
      },
      
    },
  })


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
