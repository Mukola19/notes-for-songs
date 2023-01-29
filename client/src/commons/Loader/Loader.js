import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

export const Loader = ({ show }) => {
  if (show) {
    return <CircularProgress color='inherit' sx={style} />
  }

  return null

}
