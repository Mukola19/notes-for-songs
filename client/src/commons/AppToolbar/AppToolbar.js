import React from 'react'
import { Box } from '@mui/system'
import { SearchForm } from '../../component/Search/SearchForm'
import { AppDropdown } from '../AppDropdown/AppDropdown'
import cl from 'classnames'
import st from './AppToolbar.module.scss'
export const AppToolbar = () => {

  const options = [
    { id: 2, name: ' e' },
    { id: 3, name: ' e' },
    { id: 4, name: ' esdfsdfsdfsdd' },
  ]
  return (
    <Box className={st.appToolbar}>


      <SearchForm />
      <AppDropdown options={options}  onSelect={id => console.log(id)} />
    </Box>
  ) 
}
