import React, { useState } from 'react'
import { AppButton } from '../../commons/Elements/AppButton/AppButton'
import { DropDownSide } from '../../commons/DropDownSide/DropDownSide'
import { SideMenu } from './SideMenu/SideMenu'
import st from './HomeHeader.module.scss'


export const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false)

  const changeMenu = (e) => {
    e.stopPropagation() 
    e.preventDefault()
    setShowMenu(true)
  }

  return (
    <header className={st.header}>
      <AppButton onClick={changeMenu} side/>
      <DropDownSide show={showMenu} onHide={() => setShowMenu(false)}>
        <SideMenu />
      </DropDownSide>
    </header>
  )
}
