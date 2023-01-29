import React from "react"
import { useSelector } from "react-redux"
import List from "@mui/material/List"
import { AccordionForSettings } from "../AccordionForSettings"
import { getUser } from "../../../store/user/userSelector"
import { PhotoSettingsItem } from "./PhotoSettingsItem/PhotoSettingsItem"

export const AccountSettings = () => {
  const {  displayName, photoUrl } = useSelector(getUser)
  return (
    <AccordionForSettings
      title="Акаунт"
      description={"Редагування особистої інформації"}
    >
      <List>
        <PhotoSettingsItem displayName={displayName} photoUrl={photoUrl} />
      </List>
    </AccordionForSettings>
  )
}
