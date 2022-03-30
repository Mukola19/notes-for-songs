import React from "react"
import { Avatar } from "@mui/material"


export const AppAvatar = ({ photoURL, displayName }) => {
  return (
    <>{ photoURL 
    ? <Avatar src={photoURL} />  
    : <Avatar>{displayName[0].toLocaleUpperCase()} </Avatar> }
    </>
  )
}