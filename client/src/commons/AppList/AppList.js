import { Box} from "@mui/material"

import cl from "classnames"
import st from "./AppList.module.scss"

export const AppList = ({ children, className }) => {
  return (
      <Box className={cl(st.appList, className)} >
         {children}
      </Box>
  )
}
