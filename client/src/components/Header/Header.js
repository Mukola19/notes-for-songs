import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Box, AppBar, Toolbar } from '@mui/material'
import { userIsAuth } from '../../store/user/userSelector'
import { UserMenu } from './UserMenu'
import { SearchForm } from './SearchForm'


export const Header = () => {
  const [userMenu, setUserMenu] = useState(false)
  const isAuth = useSelector(userIsAuth)

  if (!isAuth) {
    return null
  }

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' component='h2'>
          Songs
        </Typography>
        <SearchForm />
        <Box sx={{ flexGrow: 1 }} />
        <UserMenu open={userMenu} setOpen={setUserMenu} />
      </Toolbar>
    </AppBar>
  )
}
