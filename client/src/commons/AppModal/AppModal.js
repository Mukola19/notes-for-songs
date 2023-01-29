import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import st from "./AppModal.module.scss"
import { Paper } from "@mui/material"



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  };




export const  AppModal = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper sx={style}>
      {children}
      </Paper>
    </Modal>
  )
}
