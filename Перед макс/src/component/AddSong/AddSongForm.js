import React from "react"
import { useForm } from "react-hook-form"
import { AppInput } from "../../commons/Elements/AppInput/AppInput"
import st from "./AddSongForm.module.scss"

export const AddSongForm = ({ setForm, song }) => {
  const { register, handleSubmit } = useForm({ defaultValues: song })

    const onsubmit = data => setForm(data)



  return (
    <form className={st.form} onChange={handleSubmit(onsubmit)}>
      <AppInput register={register("name")} label="Назва" />

      <AppInput
        register={register("body")}
        label="Текст пісні"
        textArea
        className={st.body}
      />
    </form>
  )
}
