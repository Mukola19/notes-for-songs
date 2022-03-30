import React, { useState } from 'react'
import  { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppAvatar } from '../../commons/AppAvatar/AppAvatar'
import { logout } from '../../store/user/userThunk'
import { userProfile } from '../../store/user/userSelector'
import st from './Header.module.scss'

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { displayName, photoURL} = useSelector(userProfile)
  const dispatch = useDispatch()
  const { push } = useHistory()

  const open = Boolean(anchorEl)

  const navidate = () => push('/settings')
  const logoutHandler = () => dispatch(logout())


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
 
  return (
    <div className={st.userMenu}>

        <IconButton onClick={handleClick} >
          <AppAvatar displayName={displayName} photoURL={photoURL} />
        </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className={st.menu}
      >
        <MenuItem onClick={navidate}>
          <Typography textAlign='center'>Настройкі</Typography>
        </MenuItem>
        <MenuItem onClick={logoutHandler}>
          <Typography textAlign='center'>Вихід</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}
