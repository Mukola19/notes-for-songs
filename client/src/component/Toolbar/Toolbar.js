import * as React from 'react'
import Box from '@mui/material/Box'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { AppSpeedDial } from '../../commons/AppSpeedDial/AppSpeedDial'
import { AppZoom } from '../../commons/AppZoom/AppZoom'
import { AppCopy } from '../../commons/AppCopy/AppCopy'
import st from './Toolbar.module.scss'


export const Toolbar = ({ removeSong, text,...props }) => {
  const actions = [
    { icon: <AppCopy text={text} />, name: 'Copy' },
    { icon: <BorderColorOutlinedIcon />, name: 'Write' },
    { icon: <DeleteOutlinedIcon onClick={removeSong} />, name: 'Delete' },
  ]

  return (
    <Box className={st.toolbar}>
      <AppZoom {...props} />
      <AppSpeedDial actions={actions} />
    </Box>
  )
}
