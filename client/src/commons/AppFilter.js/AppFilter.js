import React, { useRef, useState } from "react"
import { AppButton } from "../Elements/AppButton/AppButton"
import st from "./AppFilter.module.scss"

export const AppFilter = ({ title, options, isChose }) => {
  const [chose, setChose] = useState(title)
  const [active, setActive] = useState(false)

  const ref = useRef()

  const toggleActive = () => setActive(!active)

  const change = (option) => {
    setChose(option.name)
    isChose(option.id)
    toggleActive()
  }

  const close = (e) => {
    if (!ref.current || ref.current.contains(e.target)) {
      return
    }
    // e.stopPropagation()
    toggleActive()
  }

  return (
    <div className={st.dropdown}>
      <AppButton className={st.title} onClick={toggleActive}>
        {chose}
      </AppButton>
      {active ? (
        <>
          <div className={st.background} onClick={close} />
          <ul className={st.list} ref={ref}>
            {options?.map((o) => (
              <li onClick={(e) => change(o)} key={o.id}>
                {o.name}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}
