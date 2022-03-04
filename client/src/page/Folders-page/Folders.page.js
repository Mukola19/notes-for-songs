import React from "react"
import { Header } from "../../commons/Header/Header"
import { AppToolbar } from "../../commons/AppToolbar/AppToolbar"
import { FoldersList } from "../../component/Folders/FoldersList"
import st from "./Folders.page.module.scss"




export const FoldersPage = () => {
  const folders = [
    {
      id: 1,
      name: " Весільні",
      songs: [
        { id: 2, name: " Квітучий" },
        { id: 3, name: " Квітучий" },
        { id: 4, name: " Квітучий" },
      ],
    },
    {
      id: 2,
      name: " Прославлення",
      songs: [
        { id: 2, name: " Квіsfeewтучий" },
        { id: 3, name: " Квітsdfsучий" },
        { id: 4, name: " Квітучий" },
      ],
    },
  ]

  return (
    <>
      <Header>
        <AppToolbar />
      </Header>

      <FoldersList folders={folders}/>
    </>
  )
}
