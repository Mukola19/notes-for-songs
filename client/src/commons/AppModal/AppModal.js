import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import st from "./AppModal.module.scss"



export function AppModal({ open, handleClose, children }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={st.box}>
        <Typography >{children}</Typography>
      </Box>
    </Modal>
  )
}
