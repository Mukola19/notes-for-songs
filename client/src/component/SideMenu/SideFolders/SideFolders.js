import React, { useState } from "react"
import { useSelector } from "react-redux"
import List from "@mui/material/List"
import Collapse from "@mui/material/Collapse"
import st from "./Folders.module.scss"
import { FoldersItem } from "./FoldersItem"
import { FoldersMenuItem } from "./FoldersMenuItem"
import { getFolders } from "../../../store/folders/foldersSelector"

export const SideFolders = () => {
  const [open, setOpen] = useState(false)
  const folders = useSelector(getFolders)
  return (
    <>
      <FoldersMenuItem open={open} openingSwitch={() => setOpen(!open)} />
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        className={st.foldersList}
      >
        <List component="div" disablePadding>
          {folders.map((f) => (
            <FoldersItem {...f} key={f.id} />
          ))}
        </List>
      </Collapse>
    </>
  )
}
