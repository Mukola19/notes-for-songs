import React, { useRef } from "react"
import { useState } from "react"
import cl from "classnames"
import menuImg from "../../img/icons8-меню-2-96.png"
import st from "./AppDropdown.module.scss"
import { AppButton } from "../Elements/AppButton/AppButton"

export const AppDropdown = ({  title = null, children }) => {
  const [active, setActive] = useState(false)
  const [actiOption, setActiOption] = useState(title)

  const ref = useRef()


  const close = (e) => {
    if (!ref.current || ref.current.contains(e.target)) {
      return
    }
    e.stopPropagation()
    setActive(false)
  }

  const changeActive = (e) => {
    e.stopPropagation()
    setActive(true)
  }

  const onclick = (e, { title, func }) => {
    e.stopPropagation()
    func()
    setActiOption(title)
  }

  return (
    <div className={cl(st.dropdown, { [st.active]: active })}>
      <div className={st.background} onClick={close} />

      <ul className={st.container} ref={ref}>
        {children}
      </ul>

      {title && actiOption ? (
        <AppButton className={st.title} onClick={changeActive}  >
          {actiOption}
        </AppButton>
      ) : (
        <img src={menuImg} className={st.btnDropdown} onClick={changeActive} />
      )}
    </div>
  )
}
