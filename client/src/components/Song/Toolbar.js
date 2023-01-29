import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MenuItem, Box,IconButton } from '@mui/material'
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined"
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined"
import { AppMenu } from '../../commons/AppMenu/AppMenu'
import { deleteSong } from '../../store/songs/songsThunk'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import st from './Song.module.scss'


export const Toolbar = ({ song, zoom, setZoom}) => {
  const dispatch = useDispatch()
  const { push } = useHistory()
  const [copiedText, copy] = useCopyToClipboard()


  const copyHandler = () =>  copy(song.name + '\n \n' + song.body)
  const updatePush = () => push('/songwriting/' + song.id)
  const removeSong = () => dispatch(deleteSong(song.id, push))


  return (
    <Box className={st.toolbar}>
      
      <IconButton onClick={() => setZoom(zoom + 2)}>
        <ZoomInOutlinedIcon />
      </IconButton>
      <IconButton onClick={() => setZoom(zoom - 2)}>
        <ZoomOutOutlinedIcon />
      </IconButton>

      <AppMenu>
        <MenuItem onClick={copyHandler}>Копіювати</MenuItem>
        <MenuItem onClick={updatePush}>Редагувати</MenuItem>
        <MenuItem onClick={removeSong}>Видалити</MenuItem>
      </AppMenu>
    </Box>
  )
}
