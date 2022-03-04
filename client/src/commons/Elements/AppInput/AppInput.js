import React from "react"
import TextareaAutosize from '@mui/material/TextareaAutosize'
import cl from "classnames"
import st from "./AppInput.module.scss"

export const AppInput = ({
  errors = {},
  name = "",
  label = "",
  register,
  textArea,
  ...props
}) => {
  let error = !!errors[name]

  return (
    <div  className={cl(st.inp, { [st.error]: error })}>
      {textArea ? (
        <TextareaAutosize aria-label="empty textarea" {...props} id={name} {...register} placeholder={label}  />
      ) : (
        <input {...props} id={name} {...register} placeholder={label}  autoComplete={'off'}/>
      )}
    </div>
  )
}

