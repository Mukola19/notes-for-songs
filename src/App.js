import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AppRouter } from './component/AppRouter'
import { Context } from '.'
import { Loader } from './component/Common/Loader/Loader'
import st from './App.module.css'

function App() {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
