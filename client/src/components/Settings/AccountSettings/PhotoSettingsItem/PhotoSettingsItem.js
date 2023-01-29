import React, { useState } from 'react'
import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import { AppAvatar } from '../../../../commons/AppAvatar/AppAvatar'
import { AppModal } from '../../../../commons/AppModal/AppModal'
import { PhotoSelectionDialog } from './PhotoSelectionDialog'
import { PhotoActionDialog } from './PhotoActionDialog'

export const PhotoSettingsItem = ({ displayName, photoUrl }) => {
  const [open, setOpen] = useState(false)
  const [election, setElection] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setElection(false)
  }

  const startElection = () => {
    setElection(true)
  }

  const finishElection = () => {
    setElection(false)
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClickOpen}>
          <ListItemText primary='Фото' />
          <AppAvatar displayName={displayName} photoUrl={photoUrl} />
        </ListItemButton>
      </ListItem>

      <AppModal open={open} onClose={handleClose}>
        {election 
        ? <PhotoSelectionDialog
            finishElection={finishElection}
            handleClose={handleClose}
          />
        : <PhotoActionDialog
            startElection={startElection}
            handleClose={handleClose}
            photoUrl={photoUrl}
          />
        }
      </AppModal>
    </>
  )
}
