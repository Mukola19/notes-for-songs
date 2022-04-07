import React from "react"
import { CircularProgress } from "@mui/material"


export const Loader = ({ show, ...props }) => {
  if (!show) return null
  return <CircularProgress  {...props} size={30}/>
}
