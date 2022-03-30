import React from "react"
import { Controller, useForm } from "react-hook-form"
import { IconButton, InputBase, Paper, TextareaAutosize } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import FolderIcon from "@mui/icons-material/Folder"
import wordLength from "../../utils/wordLength"
import st from "./AddSongForm.module.scss"

export const AddSongForm = ({ saveing, song }) => {
  const { register, handleSubmit } = useForm({ defaultValues: song })

  return (
    <Paper className={st.paper}>
      <form onSubmit={handleSubmit(saveing)} className={st.form}>
        <input
          className={st.nameSong}
          placeholder="Назва"
          {...register("name")}
          autoComplete="off"
        />

        <TextareaAutosize
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
