import React from "react"
import { NavLink } from "react-router-dom"

export const NavImg = ({ src, to, width, children, ...props }) => {
  return (
    <NavLink to={to} {...props}>
      <img src={src} width={width} />
      {children}
    </NavLink>
  )
}
