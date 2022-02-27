import React from "react"
import { useForm } from "react-hook-form"
import loupe from "../../img/loupe.png"
import { AppInput } from "../../commons/Elements/AppInput/AppInput"
import st from "./Search.module.scss"

export const SearchForm = () => {
  const { register, handleSubmit } = useForm()

  const onsubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)} className={st.form}>
      <img src={loupe} width={35} />
      <AppInput register={register("name")} placeholder="Пошук пісень" />
    </form>
  )
}
