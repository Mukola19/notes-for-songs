import React, { useState } from "react"
import  { useForm } from "react-hook-form"
import { Button, Form, FormControl } from "react-bootstrap"

export const FormSearch = ({ searchText }) => {

  const { register, handleSubmit} = useForm()



  return (
    <Form className="d-flex">
      <FormControl
      {...register('name')}
        placeholder="Search"
        aria-label="Search"
      />

      <Button variant="outline-success" type='submit'>
      Шукати
      </Button>
    </Form>
  )
}
