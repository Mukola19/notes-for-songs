import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Paper } from '@mui/material'
import { getOneSong } from '../../store/songs/songsThunk'
import { SongLetter } from '../../components/Song/SongLetter'
import { getSong } from '../../store/songs/songsSelector'
import { clearOneSong } from '../../store/songs/songsReducer'
import { Toolbar } from '../../components/Song/Toolbar'
import st from './Song.page.module.scss'


export const SongPage = () => {
  const song = useSelector(getSong)
  const [zoom, setZoom] = useState(16)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneSong(id))

    return () =>  dispatch(clearOneSong())
  }, [])

  return (
      <Paper className={st.paper}>
        <SongLetter fontSize={zoom} {...song} />
        <Toolbar setZoom={setZoom} zoom={zoom} song={song} />
      </Paper>
  )
}
