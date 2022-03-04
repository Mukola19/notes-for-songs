import React from "react"
import cl from "classnames"
import st from "./AppButton.module.scss"

export const AppButton = ({ children, className, side, overflow ,...props }) => {
  if (!side) {
    return (
        <button className={cl(st.button,st.overflow,className )} {...props}>
                 <p>{children}</p>
        </button>
    )
  }

  

  return (
    <button className={st.menuButton} {...props}>
      <span></span>
    </button>
  )
}
