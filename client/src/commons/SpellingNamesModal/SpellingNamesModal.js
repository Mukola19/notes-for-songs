import React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { useForm } from "react-hook-form"
import { AppButton } from "../Elements/AppButton/AppButton"
import { AppInput } from "../Elements/AppInput/AppInput"
import st from './SpellingNamesModal.modyle.scss'


export const SpellingNamesModal = ({
  open,
  onHide,
  title,
  placeholder,
  savaning,
}) => {
  const { register, handleSubmit } = useForm()

  return (
    <Dialog open={open} onClose={onHide} className={st.dialogWindow} fullWidth={400}>
      <DialogTitle>{title || 'Увага'}</DialogTitle>
      <form onSubmit={handleSubmit(savaning)}>
        <DialogContent>
          <AppInput placeholder={placeholder} register={register} name="name"  autoComplete='off'/>
        </DialogContent>
        <DialogActions>
          <AppButton type={"submit"}>Зберегти</AppButton>
        </DialogActions>
      </form>
    </Dialog>
  )
}
