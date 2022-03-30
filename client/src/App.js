import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './component/AppRouter'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import { initialize } from './store/user/userThunk'
import { Header } from './component/Header/Header'
import { SideMenu } from './component/SideMenu/SideMenu'
import './index.scss'

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(initialize())
  }, [])

  const theme = createTheme({
    palette: {
    // mode: 'dark',

   
      color: {
        // main: 'rgb(216, 179, 16)',
        main: 'rgb(221, 217, 199)',
      },
      color_desabled: {
        main: 'rgb(179, 176, 162) '
      },

      background: {
        // main: 'rgb(150, 0, 0)',
        main: 'rgb(58, 58, 58)',
      },
      transparent: {
        main: 'rgba(233, 204, 204, 0)',
      },
      primary: {
        // main: 'rgb(150, 0, 0)',
       main: 'rgb(58, 58, 58)',

      },

     
   
     
    },



    status: {
      danger: 'rgb(204, 0, 255)',
    },
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>

        <Header />
        <SideMenu/>
        <div className='app_router'>
          <AppRouter />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
