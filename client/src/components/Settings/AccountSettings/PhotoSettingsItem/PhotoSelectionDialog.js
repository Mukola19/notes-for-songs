import React from "react"
import { useDispatch } from "react-redux"
import { Avatar, Button, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { updatePhoto } from "../../../../store/user/userThunk"
import { useSelectFile } from "../../../../hooks/useSelectFile"
import st from "./PhotoSettingsItem.module.scss"


export const PhotoSelectionDialog = ({ handleClose,finishElection }) => {
  //Цей хук для вибирання фото
  const { onSelectFile, preview, selectedFile} = useSelectFile()
  const dispatch = useDispatch()

  const changePhotoHandler = () => {
    dispatch(updatePhoto(selectedFile))
    finishElection()
    handleClose()
  }

  return (
    <>
      <IconButton onClick={finishElection} className={st.arrowBack}>
        <ArrowBackIcon />
      </IconButton>
      <DialogTitle className={st.dialogTitle}>Зображення профілю</DialogTitle>
      <DialogContent className={st.photoSelectionContent}>
        <Avatar className={st.avatar} src={preview} />
      </DialogContent>

      <DialogActions>
        <input
          accept="image/*"
          className={st.inputFile}
          id="icon-button-photo"
          onChange={onSelectFile}
          type="file"
        />
        <label htmlFor="icon-button-photo">
          <Button component="span">Вибрати</Button>
        </label>

        {selectedFile && (
          <Button onClick={changePhotoHandler }>
            Змінити
          </Button>
        )}
      </DialogActions>
    </>
  )
}
