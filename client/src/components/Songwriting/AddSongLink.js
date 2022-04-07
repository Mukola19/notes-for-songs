import React from 'react'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { useHistory } from 'react-router-dom'

export const AddSongLink = () => {
    const { push } = useHistory()
  return (
    <Fab sx={{ position:'absolute', right:20, bottom:20}} onClick={() => push('/songwriting')}>
    <AddIcon />
  </Fab>
  
  )
}
