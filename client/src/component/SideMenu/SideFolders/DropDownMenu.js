import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

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
      >
        <MenuItem >
          <Typography textAlign='center'>Видалити</Typography>
        </MenuItem>
        <MenuItem >
          <Typography textAlign='center'>Редагувати</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}
