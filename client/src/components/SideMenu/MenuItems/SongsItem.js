import React from "react"
import { NavLink, useHistory, useLocation } from "react-router-dom"
import cl from "classnames"
import ListItemIcon from "@mui/material/ListItemIcon"
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"
import InboxIcon from "@mui/icons-material/Inbox"
import st from "./MenuItems.module.scss"
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"

export const SongsItem = () => {
  const { push } = useHistory()
  const { pathname } = useLocation()

  return (
    <ListItem
      onClick={() => push("/songs")}
      className={cl(st.songsItem, { [st.activeItem]: pathname === "/songs" })}
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <LibraryMusicIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Всі пісні" />
      </ListItemButton>
    </ListItem>
  )
}
