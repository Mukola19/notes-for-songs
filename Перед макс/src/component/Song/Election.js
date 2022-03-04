import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AppDropdown } from '../../commons/AppDropdown/AppDropdown'
import { AppDropdownItem } from '../../commons/AppDropdown/AppDropdownItem'
import { deleteSong } from '../../store/reducers/songsReducer'

export const Election = ({ id }) => {
  const dispatch = useDispatch()
  const { goBack, push } = useHistory()

  const remove = () => {
    dispatch(deleteSong(id))
    goBack()
  }

  const update = () => {
    push('/songwriting/' + id)
  }

  return (
    <AppDropdown>
      <AppDropdownItem onClick={remove}>Видалити</AppDropdownItem>
      <AppDropdownItem onClick={update}>Редагувати</AppDropdownItem>
    </AppDropdown>
  )
}
