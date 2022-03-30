// import React, { useState } from "react"
// import { IconButton } from "@mui/material"
// import { AppModal } from "../../../commons/AppModal/AppModal"
// import { ActionIcon } from "../ActionIcon/ActionIcon"
// import { SelectFolder } from "./SelectFolder"

// export const AddToFolder = (props) => {
//   const [open, setOpen] = useState(false)
//   const [isCreate, setIsCreate] = useState(false)

//   const handleClose = () => {
//     setOpen(false)
//     setIsCreate(false)
//   }

//   return (
//     <>
//       <IconButton onClick={() => setOpen(true)}>
//         <ActionIcon />
//       </IconButton>

//       <AppModal open={open} handleClose={handleClose}>
//          <SelectFolder {...props} setIsCreateTrue={() => setIsCreate(true)} />
//       </AppModal>
//     </>
//   )
// }
