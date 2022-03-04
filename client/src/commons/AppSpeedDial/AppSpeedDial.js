import React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import st from './AppSpeedDial.module.scss'


export const AppSpeedDial = ({ actions }) => {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 , }}>
      <SpeedDial
        direction={'down'}
        ariaLabel='SpeedDial basic example'
        icon={<MoreVertIcon />}
        className={st.speedDial}
      >
        {actions?.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
