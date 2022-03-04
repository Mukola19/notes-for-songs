import React from "react"

export const AppDropdownItem = ({ onClick, ...props }) => {
  const stop = (e) => {
    if (onClick) {
      e.stopPropagation()
      onClick()
      console.log('sdfsdfsdf');
    }
  }

  return <li {...props} onClick={stop} />
}
