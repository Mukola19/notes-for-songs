import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

export const AppButtonIcon = ({ title, children, placement,...props }) => {
  return (
    <Tooltip title={title || ''} placement={placement}>
      <IconButton {...props}>{children}</IconButton>
    </Tooltip>
  )
}
