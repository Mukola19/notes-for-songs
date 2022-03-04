import React, { useState } from 'react'
import cl from 'classnames'
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  List,
} from '@mui/material'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import DeleteIcon from '@mui/icons-material/Delete'
import st from './AppList.module.scss'


export const AppListItem = ({
  name,
  onRemove,
  onClick,
  className,
  children,
}) => {
  return (
    <ListItem
      className={cl(st.appListItem, className)}
      disablePadding
      secondaryAction={
        <IconButton edge='end' aria-label='delete' onClick={onRemove}>
          <DeleteIcon color='textColor' />
        </IconButton>
      }
    >
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <AudiotrackIcon color='textColor' />
        </ListItemIcon>
        <ListItemText primary={name || children} />
      </ListItemButton>
    </ListItem>
  )
}
