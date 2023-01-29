import React, { useEffect, useState } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '../../commons/SearchComponents/SearchComponents'
import { useDebounce } from '../../hooks/useDebounce'

export const SearchForm = () => {
  const [term, setTerm] = useState('')
  const [termQuery, setTermQuery] = useQueryParam('term', StringParam)
  const onSearch = () => {
    setTermQuery(term || undefined)
}

  const debouncedSearch  = useDebounce(onSearch, 500)

  useEffect(() => {
    setTerm(termQuery)
  }, [])

 

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        autoComplete='off'
        placeholder='Пошук пісень...'
        onChange={(e) => setTerm(e.target.value)}
        onKeyUp={debouncedSearch}
        value={term}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}
