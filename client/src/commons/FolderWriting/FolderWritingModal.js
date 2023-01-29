import  React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { createFolder, updateFolder } from '../../store/folders/foldersThunk'

export const FolderWritingModal = ({ open, onHide , folderId }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState:{ errors }, reset } = useForm()

    const saveFolder = data => {
        if(folderId) {
        dispatch(updateFolder({ folderId, ...data}))
        } else {
        dispatch(createFolder(data))
        }
        onHide()
        reset()
    }
  
  return (
 
      <Dialog open={open} onClose={onHide} fullWidth  >
          <form onSubmit={handleSubmit(saveFolder)}>
        <DialogTitle>Ведіть назву папки</DialogTitle>
        <DialogContent>
          <TextField
           {...register('name')}
            error={errors['name']}
            required
            autoFocus
            margin="dense"
            label="Назва папки"
            fullWidth
            variant="standard"
            autoComplete='off'
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit'>Зберегти</Button>
        </DialogActions>
        </form>
      </Dialog>
  )
}
