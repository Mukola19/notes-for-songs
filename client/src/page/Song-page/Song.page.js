import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../commons/Header/Header'
import { useParams } from 'react-router-dom'
import { getOneSong } from '../../store/thunks/songsThunk'
import { useAuth } from '../../hooks/useAuth'
import { Box, CircularProgress, Paper } from '@mui/material'
import st from './Song.page.module.scss'
import { SongLetter } from '../../component/SongLetter/SongLetter'
import { ToolbarContainer } from '../../component/Toolbar/Toolbar.container'

export const SongPage = () => {
  const [zoom, setZoom] = useState(16)
  const { id } = useParams()
  const song = useSelector((state) => state.songs.song)
  const { loading } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneSong(id))
  }, [])

  return (
    <>
      <Header />
      <Paper elevation={3} className={st.paper}>
        {loading ? (
          <CircularProgress color='inherit' className={st.spinner} />
        ) : (
          <SongLetter fontSize={zoom} {...song} />
        )}

        <ToolbarContainer setZoom={setZoom} zoom={zoom} song={song} />
      </Paper>
    </>
  )
}
