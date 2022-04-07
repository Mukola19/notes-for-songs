import React from 'react'
import { useHistory} from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import { deleteSong } from '../../store/songs/songsThunk'
import st from './Songs.module.scss'
import { DropDuwnMenu } from './DropDuwnMenu'

export const ItemSong = ({ id, name }) => {
  const { push } = useHistory()

  
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
        <AudiotrackIcon  />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  </ListItem>
  )
}
