import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { UserMenu } from "./UserMenu"
import { SearchPanel } from "./SearchPanel"
import { useSelector } from "react-redux"
import { userIsAuth } from "../../store/user/userSelector"
import st from "./Header.module.scss"


export const Header = () => {
  const [userMenu, setUserMenu] = useState(false)
  const  isAuth  = useSelector(userIsAuth)

  if (!isAuth) {
    return null
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <h4 className={st.title}>Songs</h4>

        <SearchPanel />
        <Box sx={{ flexGrow: 1 }} />

        <UserMenu open={userMenu} setOpen={setUserMenu} />
      </Toolbar>
    </AppBar>
  )
}
