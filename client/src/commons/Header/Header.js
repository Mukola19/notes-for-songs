import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import { SideMenu } from '../SideMenu/SideMenu'
import { useAuth } from '../../hooks/useAuth'
import { UserMenu } from '../UserMenu/UserMenu'
import st from './Header.module.scss'


export const Header = ({ children }) => {
  const [open, setOpen] = React.useState(true)
  const [userMenu, setUserMenu] = React.useState(false)
  const { isAuth } = useAuth()


  if (!isAuth) {
    return null
  }
   
  return ReactDOM.createPortal (
    <Box sx={{ flexGrow: 1 }} className={st.header}>
      <AppBar position='static' className={st.appBar}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Song
          </Typography>
          <div className={st.children}>{children || ' '}</div>
          
          <UserMenu open={userMenu} setOpen={setUserMenu} />



        </Toolbar>
      </AppBar>

      {ReactDOM.createPortal(<SideMenu open={open} setOpen={setOpen} />, document.getElementById('root'))}
    </Box>

  , document.getElementById('root') )
}
