import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { createTheme } from '@mui/material/styles'
import { Container, CssBaseline, Grid } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { AppRouter } from './components/AppRouter'
import { Header } from './components/Header/Header'
import { SideMenu } from './components/SideMenu/SideMenu'
import { AddSongLink } from './components/Songwriting/AddSongLink'
import { InitializationPage } from './commons/InitializationPage/InitializationPage'
import { appLoading, getInitiated, getMode } from './store/app/appSelector'
import { userIsAuth } from './store/user/userSelector'
import { initialize } from './store/app/appReducer'
import './index.scss'
import { Loader } from './commons/Loader/Loader'

function App() {
  const dispatch = useDispatch()
  const mode = useSelector(getMode)
  const initiated = useSelector(getInitiated)
  const isAuth = useSelector(userIsAuth)
  const loading = useSelector(appLoading)


  useEffect(() => {
    dispatch(initialize())
  }, [])

  const theme = createTheme({
    palette: {
      mode,
    },
    shape: {
      borderRadius: 1,
    },
  })
  window.theme = theme

  if (!initiated) return <InitializationPage />

  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isAuth ? (
            <>
              <Header />
              <SideMenu />
              <AddSongLink />
            </>
          ) : null}

          <Container maxWidth={'md'} className={'app_router'}>
            <AppRouter />
          </Container>

          <Loader show={loading}/>
        </ThemeProvider>
      </QueryParamProvider>
    </BrowserRouter>
  )
}

export default App
