import React from "react"
import cl from "classnames"
import st from "./AppButton.module.scss"
import { Button } from "@mui/material"

export const AppButton = ({ children, className, ...props }) => {
  return (
    <Button variant="contained"  className={cl(st.button, className)}{...props} >{children}</Button>
  )
}
