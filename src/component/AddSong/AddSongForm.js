import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, TextArea } from '../Common/FormElement/FormElement'
import st from './AddSongForm.module.scss'
import { Button, Form } from 'react-bootstrap'

export const AddSongForm = ({ setSong }) => {
  const { register, handleSubmit } = useForm()



  return (
    <Form className={st.form} onChange={handleSubmit(setSong)}>

      <Form.Control {...register('name')} placeholder='Назва' />
      <Form.Control
        {...register('body')}
        as='textArea'
        placeholder='Текст пісні'
        className={st.body}

      />
    </Form>
  )
}
