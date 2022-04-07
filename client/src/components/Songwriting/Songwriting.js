import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IconButton, InputBase, Paper, TextareaAutosize } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import FolderIcon from "@mui/icons-material/Folder"
import wordLength from "../../utils/wordLength"
import st from "./Songwriting.module.scss"
import { styled } from "@mui/system"



const MyTextareaAutosize = styled(TextareaAutosize)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: 'rgb(47, 83, 114, 0)',
}))










export const Songwriting = ({ saveing, song }) => {
  const { register, handleSubmit } = useForm({ defaultValues: song })

  return (
    <Paper className={st.paper}>
      <form onSubmit={handleSubmit(saveing)} className={st.form}>
        <InputBase
          className={st.nameSong}
          placeholder="Назва"
          {...register("name")}
          autoComplete="off"
        />

        <MyTextareaAutosize
          className={st.bodySong}
          placeholder="Текст пісні"
          {...register("body")}
        />

        <div className={st.toolbar}>
          <div className={st.selectedFolder}>
            <FolderIcon className={st.folderIcon} color={'color_desabled'} />
            <p>{wordLength("Без папки")}</p>
          </div>

          <IconButton type={"submit"}>
            <SaveIcon color="color" />
          </IconButton>
        </div>
      </form>
    </Paper>
  )
}
