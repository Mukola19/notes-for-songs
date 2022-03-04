import React, { useRef, useState } from "react"
import cl from "classnames"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import st from "./DropDownSide.module.scss"


export const DropDownSide = ({ show, onHide, children }) => {
  const ref = useRef()
  useOnClickOutside(ref,onHide)

  return (
    <div className={cl( st.backgroundMenu, show ? st.activeMenu : null)}>
      <div ref={ref} className={st.menu}>{children}</div>
    </div>
  )
}
