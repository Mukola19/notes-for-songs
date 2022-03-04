import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material"
import  AudiotrackIcon  from "@mui/icons-material/Audiotrack"
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteSong } from "../../store/reducers/songsReducer"
import st from "./ListSongs.module.scss"

export const ItemSong = ({ id, name }) => {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const remove = (e) => {
    dispatch(deleteSong(id))
  }

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={remove}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton onClick={() => push("/song/" + id)}>
        <ListItemIcon>
          <AudiotrackIcon />
        </ListItemIcon>

        <ListItemText primary={name} />
      </ListItemButton>
      <Divider />
    </ListItem>
  )
}
