import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem } from "@mui/material"
import AudiotrackIcon from "@mui/icons-material/Audiotrack"
import { AppMenu } from "../../commons/AppMenu/AppMenu"
import { deleteSong } from "../../store/songs/songsThunk"
import st from "./Songs.module.scss"


// Елемент списку пісень, при натискані редиректить на сторінку пісні
export const ItemSong = ({ id, name }) => {
  const { push } = useHistory()
  const dispatch = useDispatch()



  const removeSongHandler = () => {
    dispatch(deleteSong(id))
  }

  const editingSongHandler = () => {
    push(`/songwriting/${id}`)
  }
  


  return (
    <ListItem
      className={st.appListItem}
      disablePadding
      secondaryAction={
        <AppMenu>
          <MenuItem onClick={removeSongHandler}>Видалити</MenuItem>
          <MenuItem onClick={editingSongHandler}>Редагувати</MenuItem>
        </AppMenu>
      }
    >
      <ListItemButton onClick={() => push(`/song/${id}`)}>
        <ListItemIcon>
          <AudiotrackIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
}
