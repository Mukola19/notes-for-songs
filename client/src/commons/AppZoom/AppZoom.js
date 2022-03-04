import React from "react"
import { IconButton } from "@mui/material"
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined"
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined"

export const AppZoom = ({ setZoom, zoom }) => {
  return (
    <>
      <IconButton onClick={() => setZoom(zoom + 2)}>
        <ZoomInOutlinedIcon />
      </IconButton>

      <IconButton onClick={() => setZoom(zoom - 2)}>
        <ZoomOutOutlinedIcon />
      </IconButton>
    </>
  )
}
