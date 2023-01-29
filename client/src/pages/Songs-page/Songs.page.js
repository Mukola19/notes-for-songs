import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'
import { getSongs } from '../../store/songs/songsSelector'
import { requestSongs } from '../../store/songs/songsThunk'
import { useLocation } from 'react-router-dom'
import { List, Paper, Typography } from '@mui/material'
import { ItemSong } from '../../components/Songs/ItemSong'
import { clearSongs } from '../../store/songs/songsReducer'

export const SongsPage = () => {
  const songs = useSelector(getSongs)
  const dispatch = useDispatch()
  const location = useLocation()
  const { folderId, term } = queryString.parse(location.search)

  
  useEffect(() => {
    return () => dispatch(clearSongs())
  }, [])


  useEffect(() => {
    dispatch(requestSongs(folderId, term))

    return () => dispatch(clearSongs())
  }, [folderId, term])



 
  return (
    <Paper >
      <List>
        {songs.length
         ? songs?.map(song => <ItemSong {...song} key={song.id} />)
         : <Typography variant='h6' component='h4'  paddingLeft={2}>
             Тут немає пісень
          </Typography>
        }
      </List>
    </Paper>
  )
}
