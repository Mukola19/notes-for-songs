import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import NightlightRoundIcon from "@mui/icons-material/NightlightRound"
import LightModeIcon from "@mui/icons-material/LightMode"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { getMode } from "../../store/app/appSelector"
import { useDispatch, useSelector } from "react-redux"
import { changeMode } from "../../store/app/appReducer"

export const SettingsPage = () => {
  const mode = useSelector(getMode)
  const dispatch = useDispatch()

  const changeModeHandler = (e, newMode) => {
    if(mode !== newMode && newMode !== null) {
      dispatch(changeMode(newMode))
    }
   
  }

  return (
    <Box>
      <Typography variant="h6" component="h2">
        Тема
      </Typography>

      <ToggleButtonGroup value={mode} onChange={changeModeHandler} exclusive>
        <ToggleButton value="light">
          <LightModeIcon />
        </ToggleButton>
        <ToggleButton value="dark">
          <NightlightRoundIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
