import React from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, IconButton, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { removePhoto } from '../../../../store/user/userThunk'
import st from './PhotoSettingsItem.module.scss'

export const PhotoActionDialog = ({ startElection, handleClose, photoUrl }) => {
  const dispatch = useDispatch()

  const deletePhoto = () => {
    dispatch(removePhoto())
    handleClose()
  }


  return (
    <>
      <IconButton onClick={handleClose} className={st.arrowBack}>
        <CloseIcon />
      </IconButton>
      <DialogTitle className={st.dialogTitle}>
        Зображення профілю
      </DialogTitle>
      <DialogContent>
        <Avatar className={st.avatar} src={photoUrl} />
      </DialogContent>
      <DialogActions>
        <Button onClick={startElection}>Змінити</Button>
        <Button onClick={deletePhoto}>Видалити</Button>
      </DialogActions>
    </>
  )
}
