import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./components/AppRouter"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"
import { Header } from "./components/Header/Header"
import { SideMenu } from "./components/SideMenu/SideMenu"
import "./index.scss"
import { Container, CssBaseline, Grid } from "@mui/material"
import { getInitiated, getMode } from "./store/app/appSelector"
import { initialize, requireMode } from "./store/app/appReducer"
import { AddSongLink } from "./components/Songwriting/AddSongLink"

function App() {
  const dispatch = useDispatch()
  const mode = useSelector(getMode)
  const initiated = useSelector(getInitiated)

  

  useEffect(() => {
    dispatch(requireMode())
    dispatch(initialize())
  }, [])
  const theme = createTheme({
    palette: {
      mode
    },
    shape: {
      borderRadius: 1,
    },
  })

if(!initiated) return null




  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <SideMenu />
        <Container maxWidth={"md"} className={"app_router"}>
          <AppRouter />
        </Container>
       <AddSongLink/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
