import React from 'react'
import { useForm } from 'react-hook-form'
import { AppInput } from '../../commons/Elements/AppInput/AppInput'
import { IconButton, Paper } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';

import st from './AddSongForm.module.scss'

export const AddSongForm = ({ setForm, song }) => {
  const { register, handleSubmit } = useForm({ defaultValues: song })

    const onsubmit = data => setForm(data)



  return (
    <Paper elevation={3} className={st.paper}>

    <form  onChange={handleSubmit(onsubmit)}>
   
      <AppInput register={register('name')} label='Назва' />

      <AppInput
        register={register('body')}
        label='Текст пісні'
        textArea
        className={st.body}
      />
    </form>
 


    <IconButton className={st.saveButton}>
        <SaveIcon color='textColor'/>
      </IconButton>



    </Paper>
  )
}
