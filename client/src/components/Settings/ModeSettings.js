import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'
import LightModeIcon from '@mui/icons-material/LightMode'
import { AccordionForSettings } from '../../components/Settings/AccordionForSettings'
import { getMode } from '../../store/app/appSelector'
import { changeMode } from '../../store/app/appReducer'

export const ModeSettings = () => {
  const mode = useSelector(getMode)
  const dispatch = useDispatch()

  const changeModeHandler = (e, newMode) => {
    if (mode !== newMode && newMode !== null) {
      dispatch(changeMode(newMode))
    }
  }
  return (
    <AccordionForSettings title='Тема' description='Можете змінити тему'>
      <Typography>
        <ToggleButtonGroup value={mode} onChange={changeModeHandler} exclusive>
          <ToggleButton value='light'>
            <LightModeIcon />
          </ToggleButton>
          <ToggleButton value='dark'>
            <NightlightRoundIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Typography>
    </AccordionForSettings>
  )
}
