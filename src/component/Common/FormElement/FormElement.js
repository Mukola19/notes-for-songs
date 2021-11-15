import st from './Form.module.css'
import React from 'react'



export const Input = ({field, form,classSt, ...props}) => {
    return(
    <div>
    <h4 className={st.form_label}>{props.label}</h4>
    {form.errors[field.name]&& form.touched[field.name] && <div className={st.form_error} >{form.errors[field.name]}</div>}
    <input {...field} {...props} className={st.form_input} autocomplete='off'/>
  </div>
    )
  }


  export const TextArea = ({field, form,classSt, ...props}) => {
    return(
    <div>
    <h4 className={st.form_label}>{props.label}</h4>
    {form.errors[field.name]&& form.touched[field.name] && <div className={st.form_error} >{form.errors[field.name]}</div>}
    <textarea className={st.textArea} {...field} {...props} />
  </div>
    )
  }



