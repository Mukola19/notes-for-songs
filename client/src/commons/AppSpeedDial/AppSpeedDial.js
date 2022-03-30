import React, { useState } from 'react'
import Box from '@mui/material/Box'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { AppButtonIcon } from '../AppButtonIcon/AppButtonIcon'
import st from './AppSpeedDial.module.scss'

// Випадаюча панель інмструментів
export const AppSpeedDial = ({ actions }) => {
  const [open, setOpen] = useState(true)
  

  const handleClick = () => setOpen(!open)

  return (
    <Box className={st.speedDial} >
      <AppButtonIcon onClick={handleClick}>
        <MoreVertIcon />
      </AppButtonIcon>

      <div className={st.below}>
        {open
          ? actions?.map(({ name, icon }) => (
              <AppButtonIcon key={name} title={name} placement={'left'}>
                {icon}
              </AppButtonIcon>
            ))
          : null}
      </div>
    </Box>
  )
}
