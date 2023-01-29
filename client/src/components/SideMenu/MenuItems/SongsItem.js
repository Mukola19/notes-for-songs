import React from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import { useAppQueryParam } from '../../../hooks/useAppQueryParams'
import cl from 'classnames'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from '@mui/material'
import st from './MenuItems.module.scss'


export const SongsItem = () => {
  const [folderId, setFolderId] = useAppQueryParam('folderId', StringParam, '/songs')

  return (
    <ListItem
      onClick={() => setFolderId(undefined)}
      className={st.songsItem}
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <LibraryMusicIcon fontSize='small' />
        </ListItemIcon>
        
        <ListItemText primary='Всі пісні' className={cl( { [st.active]: !folderId })} />
      </ListItemButton>
    </ListItem>
  )
}
