import React from "react"
import { Grid } from "@mui/material"
import { SideSongs } from "./SideSongs"
import { SideFolders } from "./SideFolders/SideFolders"
import { useSelector } from "react-redux"
import { userIsAuth } from "../../store/user/userSelector"
import st from "./SideMenu.module.scss"

export const SideMenu = () => {
  const isAuth = useSelector(userIsAuth)

  if (!isAuth) return null

  return (
    <Grid className={st.sidebar}>
      <SideSongs />
      <SideFolders />
    </Grid>
  )
}
