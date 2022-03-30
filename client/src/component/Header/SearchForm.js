import React from 'react'
import { useForm } from 'react-hook-form'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '../../commons/SearchComponents/SearchComponents'
import st from './Header.module.scss'

export const SearchForm = ({ onSearch }) => {

  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSearch)} >
      <Search>
        <SearchIconWrapper>
          <SearchIcon color='color' />
        </SearchIconWrapper>
        <StyledInputBase
          autoComplete='off'
          placeholder='Пошук пісень...'
          inputProps={{ 'aria-label': 'search' }}
          {...register('name')}
        />
      </Search>
    </form>
  )
}


