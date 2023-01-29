import React, { Component, useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { convertToRaw, EditorState, convertFromRaw } from "draft-js"
import draftToHtmlPuri from "draftjs-to-html"
import { convertToHTML } from "draft-convert"
import { stateToHTML } from "draft-js-export-html"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { SelectFolderDialog } from "./SelectFolderDialog"
import { ToolbarForSave } from "./ToolbarForSave"
import { useForm } from "react-hook-form"
import { InputBase, Paper, TextareaAutosize } from "@mui/material"
import { styled } from "@mui/system"

import st from "./Songwriting.module.scss"

// Написання слів до пісні і вибирання папки, і редагування

export const Songwriting = ({ song, saveing }) => {
  const [showSelect, setShowSelect] = useState(false)
  const [selectedFolder, setSelectedFolder] = useState({})

  // Зберігання пісні
  const saveingHandler = (data) => {
    saveing({ folderId: selectedFolder.id, ...data })
  }




  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createWithContent(convertFromRaw(content))
  // )

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  // useEffect(() => {
  //   console.log(convertToRaw(editorState.getCurrentContent()))
  // }, [editorState])

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  const htmlPuri = draftToHtmlPuri(
    convertToRaw(editorState.getCurrentContent())
  )

  return (
    <>
      <Paper className={st.propertiesSongs}>
        {/* <InputBase
          required
          className={st.nameSong}
          placeholder='Назва пісні'
          // {...register('name')}  
          autoComplete='off'
        /> */}

        <ToolbarForSave
          nameFolder={selectedFolder.name}
          showElection={() => setShowSelect(true)}
        />
      </Paper>

      <Paper className={st.paper}>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName={st.wrapper}
          editorClassName={st.editor}
          toolbar={{
            options: [
              "inline",
              "fontSize",
              "fontFamily",
              "textAlign",
              "colorPicker",
              "link",
              "remove",
              "history",
            ],
            inline: {
              inDropdown: false,
              options: ["bold", "italic", "underline"],
            },
          }}
        />
      </Paper>

      <SelectFolderDialog
        open={showSelect}
        onClose={() => setShowSelect(false)}
        selectAFolder={setSelectedFolder}
      />

      <div>
        <p>puri</p>
        <textarea
          disabled
          value={htmlPuri}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: htmlPuri,
          }}
        />
      </div>
    </>
  )
}

