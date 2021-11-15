import React, { useEffect } from "react"
import st from "./SeachContent.module.css"

export const SearchContent = ({ showText, newStateContent }) => {

 
  return (
    <div className={st.searchContent}>
      {newStateContent.map(({name, id}) => {
        return (
          <div
            key={id}
            className={st.searchText}
            onClick={() => showText(id)}
          >
            {name}
          </div>
        )
      })}
    </div>
  )
}
