import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined"

export const AppCopy = ({ text }) => {
  return (
    <CopyToClipboard text={text} >
        <FileCopyIcon />
    </CopyToClipboard>
  )
}
