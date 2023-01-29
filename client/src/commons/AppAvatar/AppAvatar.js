import React from "react"
import { Avatar } from "@mui/material"


export const AppAvatar = ({ photoUrl, displayName }) => {
  return (
    <>{ photoUrl 
    ? <Avatar src={photoUrl} />  
    : <Avatar>{displayName[0].toLocaleUpperCase()} </Avatar> }
    </>
  )
}