import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, IconButton } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import { SearchForm } from './SearchForm'
import st from './Header.module.scss'


export const SearchPanel = ({ onSearch }) => {
  const { push } = useHistory()

  return (
    <Box className={st.searchPanel}>
      <SearchForm onSearch={() => push('/songs')} />
      <IconButton onClick={() => push('/songwriting')}>
        <AddBoxOutlinedIcon color='color' fontSize='large' />
      </IconButton>
    </Box>
  )
}
