import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { FolderWritingModal } from '../../../commons/FolderWriting/FolderWritingModal'
import { deleteFolder } from '../../../store/folders/foldersThunk'

export const DropDuwnMenu = ({ folderId }) => {
  const [dialogShow, setDialogShow] = useState(false)
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


  const deleteFolderHandler = () => {
    dispatch(deleteFolder(folderId))
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
          <Typography textAlign='center' onClick={deleteFolderHandler}>Видалити</Typography>
        </MenuItem>
        <MenuItem onClick={() => setDialogShow(true)} >
          <Typography textAlign='center'>Редагувати</Typography>
        </MenuItem>
      </Menu>


    <FolderWritingModal open={dialogShow} onHide={() => setDialogShow(false)} folderId={folderId} />

    </>
  )
}
