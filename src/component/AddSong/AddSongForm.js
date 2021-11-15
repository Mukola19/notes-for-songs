import React from "react"
import { Field, Formik } from "formik"
import { Input, TextArea } from "../Common/FormElement/FormElement"
import st from "./AddSongForm.module.css"
import { Button } from "react-bootstrap"

export const AddSongForm = ({ addSongText }) => {

  const onsubmit = (
    values,
    { setSubmitting, resetForm, setStatus, ...prop }
  ) => {
    addSongText(values)
    setSubmitting(false)
    resetForm()
  }

  return (
    <div className={st.form}>
      <h2 className={st.title}>Нова пісня</h2>
      <Formik
        initialValues={{
          id: 1,
          name: "",
          body: ``,
        }}
        onSubmit={onsubmit}
      >
        {({ handleSubmit, isSubmitting, status }) => {
          return (
            <div>
              <form onSubmit={handleSubmit} className={st.form}>
                <div className={st.form_error}>{status}</div>

                <Field component={Input} name="name" label="Імя" />
                <Field component={TextArea} name="body" label="Текст" />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="dark"
                  size="lg"
                  className={st.form_button}
                >
                  Add
                </Button>
              </form>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}
