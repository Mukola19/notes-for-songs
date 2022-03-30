import React from "react"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import cl from "classnames"
import st from "./AppInput.module.scss"

export const AppInput = (props) => {
  const { register = () => {}, name = '', errors = {}, ...field } = props

  let error = false

  return (
    <div className={cl(st.field, { [st.error]: error })}>
      {  errors[name]
       ? <p className={st.error}> {errors[name].message}</p>
       : null
      }

        <input {...field} {...register(name)}  />
      
    </div>
  )
}
