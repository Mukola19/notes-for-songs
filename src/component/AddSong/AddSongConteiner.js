import { connect } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import { addSongFunc } from "../../Redux/Reducer/HeaderReducer"
import { AddSongForm } from "./AddSongForm"

 const AddSongConteiner = (props) => {
  const dispatch = useDispatch()

  const addSongText = (values) => {
      dispatch(addSongFunc(values))
  }


  return <AddSongForm addSongText={addSongText} />
}


export default AddSongConteiner