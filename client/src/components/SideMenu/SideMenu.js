import React from "react"
import List from "@mui/material/List"
import { useSelector } from "react-redux"
import { userIsAuth } from "../../store/user/userSelector"
import st from "./SideMenu.module.scss"
import { SongsItem } from "./MenuItems/SongsItem"
import { FoldersItemOne } from "./MenuItems/FoldersItemOne"


export const SideMenu = () => {
  const isAuth = useSelector(userIsAuth)

  if (!isAuth) return null

  return (
    <List className={st.sidebar} sx={{  bgcolor: 'background.paper' }}>
      <SongsItem />
      <FoldersItemOne />
    </List>
  )
}
