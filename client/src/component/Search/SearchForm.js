import React from 'react'
import { useForm } from 'react-hook-form'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '../../commons/AppSearch/AppSearch'
import st from './Search.module.scss'

export const SearchForm = ({ onSearch }) => {
  const { register, handleSubmit } = useForm()

  

  return (


    
    <form onSubmit={handleSubmit(onSearch)} className={st.form}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon color='textColor'/>
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
