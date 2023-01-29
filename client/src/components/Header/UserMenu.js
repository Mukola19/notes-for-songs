import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MenuItem } from '@mui/material'
import { AppAvatar } from '../../commons/AppAvatar/AppAvatar'
import { logout } from '../../store/user/userThunk'
import { userProfile } from '../../store/user/userSelector'
import { AppMenu } from '../../commons/AppMenu/AppMenu'
import st from './Header.module.scss'


export const UserMenu = () => {
  const { displayName, photoUrl } = useSelector(userProfile)
  const dispatch = useDispatch()
  const { push } = useHistory()

  const navidate = () => {
    push('/settings')
  }

  const logoutHandler = () => dispatch(logout())

  return (
    <div className={st.userMenu}>
      <AppMenu
        buttonAction={
          <AppAvatar displayName={displayName} photoUrl={photoUrl} />
        }
      >
        <MenuItem onClick={navidate}>Настройкі</MenuItem>
        <MenuItem onClick={logoutHandler}>Вихід</MenuItem>
      </AppMenu>
    </div>
  )
}
