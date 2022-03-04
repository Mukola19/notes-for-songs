import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteSong } from '../../store/thunks/songsThunk'
import { AppListItem } from '../../commons/AppList/AppListItem'
import st from './ListSongs.module.scss'

export const ItemSong = ({ id, name }) => {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const remove = () => {
    dispatch(deleteSong(id))
  }

  return (
    <AppListItem
      onRemove={remove}
      onClick={() => push('/song/' + id)}
      className={st.listItem}
      name={name}
    />
  )
}
