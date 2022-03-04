import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AppInput } from '../../commons/Elements/AppInput/AppInput'
import { AppButton } from '../../commons/Elements/AppButton/AppButton'
import { validAuth } from '../../utils/validation'
import st from './AuthForm.module.scss'


export const AuthForm = ({ setIsLogin, isLogin, onsubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validAuth()),
  })

  return (
    <form onSubmit={handleSubmit(onsubmit)}>

   {isLogin ? null :   <AppInput
        name='displayName'
        placeholder='Enter name'
        label="І'мя"
        errors={errors}
        register={register('displayName')}
      />}

      <AppInput
        name='email'
        placeholder='Enter email'
        label='Логін'
        errors={errors}
        register={register('email')}
      />

      <AppInput
        name='password'
        type='password'
        errors={errors}
        placeholder='Enter password'
        label='Пароль'
        register={register('password')}
      />

      <AppButton type='submit' className={st.buttonSubmit}>
        {isLogin ? 'Війти' : 'Заєструватись'}
      </AppButton>

      <p className={st.choice} onClick={setIsLogin}>
        {isLogin ? 'Немає акаунта? Заєструватись' : 'Є акаунт? Війти'}
      </p>
    </form>
  )
}
