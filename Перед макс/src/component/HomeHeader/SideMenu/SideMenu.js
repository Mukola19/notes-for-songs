import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import settingImg from '../../../img/setting.png'
import logoutImg from '../../../img/logout.png'
import userImg from '../../../img/user.png'
import logIn from '../../../img/log-in.png'
import { logout } from '../../../store/reducers/userReducer'
import { useAuth } from '../../../hooks/useAuth'
import st from './SideMenu.module.scss'


export const SideMenu = () => {
  const { displayName, isAuth, photoURL } = useAuth()
  const dispatch = useDispatch()

  return (
    <>
      <div className={st.header}>
        <img src={isAuth ? photoURL : userImg} width={50} />
        <span className={st.displayName}>{displayName}</span>
      </div>
      <div className={st.container}>
        <NavLink to='/'>
          <img src={settingImg} width={35} /> Настройкi
        </NavLink>

        {isAuth ? (
          <span onClick={() => dispatch(logout())}>
            <img src={logoutImg} width={30} /> Вийти
          </span>
        ) : (
          <NavLink to={'/auth'} >
            <img src={logIn} width={30} /> 
            Війти
          </NavLink>
        )}
      </div>
    </>
  )
}
