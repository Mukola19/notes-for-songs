import React, { useState } from "react"
import { Field, Formik } from "formik"
import { Input, TextArea } from "../Common/FormElement/FormElement"
const st = {}

export const AddSongForm = ({ addSongText }) => {
  const [isBool, setIsBool] = useState(false)
  const [names, setNames] = useState('')

  const onsubmit = (
    values,
    { setSubmitting, resetForm, setStatus, ...prop }
  ) => {
    addSongText(values)
    console.log(values)
    setSubmitting(false)
  }


  return (
    <div>
      <Formik
        initialValues={{
          id: 1,
          name: "",
          body:``
        }}
        onSubmit={onsubmit}
      >
        {({ handleSubmit, isSubmitting, status }) => {
          return (
            <div>
              <form onSubmit={handleSubmit} className={st.form}>
                <div className={st.form_error}>{status}</div>

                <Field component={Input} name="name" label="Імя" />
                <Field component={TextArea} name='body' label="Текст"/>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={st.form_button}
                >
                  Add
                </button>
              </form>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}
































