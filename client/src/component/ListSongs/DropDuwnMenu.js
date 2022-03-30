import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import st from './ListSongs.module.scss'
import { deleteSong } from '../../store/songs/songsThunk'

export const DropDuwnMenu = ({ songId }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()
  const { push } = useHistory()

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick} edge={'end'}>
        <MoreVertIcon color={'color'}/>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className={st.dropDuwnMenu}
      >
        <MenuItem onClick={() => dispatch(deleteSong(songId))}>
          <Typography textAlign='center'>Видалити</Typography>
        </MenuItem>
        <MenuItem onClick={() => push(`/songwriting/${songId}`)}>
          <Typography textAlign='center'>Редагувати</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}
