import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link, NavLink } from 'react-router-dom'
import { deleteSong } from '../../store/songs/songsThunk'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import st from './ListSongs.module.scss'
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { DropDuwnMenu } from './DropDuwnMenu'

export const ItemSong = ({ id, name }) => {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const remove = () => {
    dispatch(deleteSong(id))
  }

  return (
    <ListItem
    className={st.appListItem}
    disablePadding
    secondaryAction={
    <DropDuwnMenu songId={id}/>
    }
  >
    <ListItemButton onClick={() => push(`/song/${id}`)}>
      <ListItemIcon>
        <AudiotrackIcon color='color' />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  </ListItem>
  )
}
