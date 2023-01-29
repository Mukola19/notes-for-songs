import React from 'react'
import { Box } from '@mui/system'
import { ModeSettings } from '../../components/Settings/ModeSettings'
import { AccountSettings } from '../../components/Settings/AccountSettings/AccountSettings'

export const SettingsPage = () => {
  return (
    <Box>
      <AccountSettings />
      <ModeSettings />
    </Box>
  )
}
