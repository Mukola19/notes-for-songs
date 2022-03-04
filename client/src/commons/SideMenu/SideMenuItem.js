import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from 'classnames'
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/Inbox'
import st from './SideMenu.module.scss'

export const SideMenuItem = ({ open, path, title, component }) => {
  return (
    <NavLink
      to={path}
      activeClassName={st.listItemActive}
      className={cl(st.listItem, { [st.itemOpen]: open })}
    >
      <ListItemIcon>
        {component}
      </ListItemIcon>
      <p children={title} className={st.itemText} />
    </NavLink>
  )
}
