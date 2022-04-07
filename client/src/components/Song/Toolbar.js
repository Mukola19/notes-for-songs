import * as React from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteSong } from "../../store/songs/songsThunk"
import Box from '@mui/material/Box'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { AppSpeedDial } from '../../commons/AppSpeedDial/AppSpeedDial'
import { AppZoom } from '../../commons/AppZoom/AppZoom'
import { AppCopy } from '../../commons/AppCopy/AppCopy'
import st from './Song.module.scss'


export const Toolbar = ({  song, ...props }) => {

  const dispatch = useDispatch()
  const { push } = useHistory()

  const removeSong = () => dispatch(deleteSong(song.id, push))


  const updatePush = () => push('/songwriting/' + song.id )


  const actions = [
    { icon: <AppCopy text={song.name + '\n \n'+ song.body} />, name: 'Copy' },
    { icon: <BorderColorOutlinedIcon onClick={updatePush}/>, name: 'Write' },
    { icon: <DeleteOutlinedIcon onClick={removeSong} />, name: 'Delete' },
  ]

  return (
    <Box className={st.toolbar}>
      <AppZoom {...props} />
      <AppSpeedDial actions={actions} />
    </Box>
  )
}


