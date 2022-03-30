import React from "react"
import { NavLink, useHistory ,useLocation} from "react-router-dom"
import cl from "classnames"
import ListItemIcon from "@mui/material/ListItemIcon"
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"
import InboxIcon from "@mui/icons-material/Inbox"
import st from "./SideMenu.module.scss"
import { ListItem } from "@mui/material"

export const SideSongs = () => {
  const { push } = useHistory()
  const { pathname } = useLocation()

  return (
    <ListItem 
    onClick={() => push('/songs')}
    className={cl(st.listItem, {[st.activeItem]:pathname === '/songs'})}
    >
      <ListItemIcon><LibraryMusicIcon color='color'/></ListItemIcon>
      <p children={'Всі пісні'} className={st.itemText} />
    </ListItem>
  )
}
