import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { login, registration } from '../../store/user/userThunk'
import { appLoading } from '../../store/app/appSelector'
import { Paper } from '@mui/material'
import { AppInput } from '../../commons/Elements/AppInput/AppInput'
import { AppButton } from '../../commons/Elements/AppButton/AppButton'
import { Loader } from '../../commons/Loader/Loader'
import { validAuth } from '../../utils/validation'
import st from './Auth.page.module.scss'




export const AuthPage = () => {
  const loading = useSelector(appLoading)
  const [isLogin, setIsLogin] = useState(true)
  const dispatch = useDispatch()

  const useform = { resolver: yupResolver(validAuth()) }
  
  const { 
    register,
    handleSubmit,
    formState: { errors },
    reset } = useForm(useform)


  const sendForm = data => {
    isLogin
    ? dispatch(login(data))
    : dispatch(registration(data))
  }


  const changeIsLogin = () => {
    setIsLogin(!isLogin)
    reset()
  }

  return (
  <Paper className={st.authPage}>
   <h2 className={st.title}>{isLogin? 'Вхід' : 'Реєстрація'}</h2>
    <form onSubmit={handleSubmit(sendForm)} className={st.authForm}>
      {isLogin 
      ? null 
      : <AppInput
         name='displayName'
         placeholder='Enter name'
         label="І'мя"
         errors={errors}
         register={register}
        />
      }

      <AppInput
        name='email'
        placeholder='Enter email'
        label='Логін'
        errors={errors}
        register={register}
      />

      <AppInput
        name='password'
        type='password'
        errors={errors}
        placeholder='Enter password'
        label='Пароль'
        register={register}
      />


      <AppButton type='submit' className={st.buttonSubmit} >
        {isLogin ? 'Війти' : 'Заєструватись'}
      </AppButton>


      <p className={st.choice} onClick={changeIsLogin}>
        {isLogin ? 'Немає акаунта? Заєструватись' : 'Є акаунт? Війти'}
      </p>
    </form>
    <Loader show={loading} className={st.loader}/>
  </Paper>

  )
}
