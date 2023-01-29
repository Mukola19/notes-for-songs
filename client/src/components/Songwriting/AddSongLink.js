import React from 'react'
import { useHistory } from 'react-router-dom'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

export const AddSongLink = () => {
  const { push } = useHistory()
  return (
    <Fab
      sx={{ position: 'fixed', right: 20, bottom: 20 }}
      onClick={() => push('/songwriting')}
    >
      <AddIcon />
    </Fab>
  )
}
