import React from 'react'
import { useForm } from 'react-hook-form'
import st from "./Search.module.scss"
import loupe from '../../img/loupe.png'

export const SearchForm = () => {
    const { register, handleSubmit } = useForm()

const onsubmit = data => {
    console.log(data)
}


  return (
    <form onSubmit={handleSubmit(onsubmit)} className={st.form}>
        <img src={loupe} width={35}/>
        <input {...register('name')} placeholder='Пошук пісень'/>

    </form>
  )
}



