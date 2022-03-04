import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AuthForm } from '../../component/Auth/AuthForm'
import { Header } from '../../commons/Header/Header'
import { login, registration } from '../../store/thunks/userThunk'
import st from './Auth.page.module.scss'


export const AuthPage = ({ handleClose }) => {
  const [isLogin, setIsLogin] = useState(true)
  const { push } = useHistory()
  const dispatch = useDispatch()

  const onsubmit = async data => {
    if (isLogin) {
     await dispatch(login(data))
    } else {
      await dispatch(registration(data))

    }
    push('/home')
  }
  return (
      <div className={st.authPage}>
        <h2 className={st.title}>{isLogin? 'Вхід' : 'Реєстрація'}</h2>
        <AuthForm
          setIsLogin={() => setIsLogin(!isLogin)}
          onsubmit={onsubmit}
          isLogin={isLogin}
        />
      </div>
  )
}
