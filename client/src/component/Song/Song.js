import React from "react"
import { Loader } from "../../commons/Loader/Loader"
import st from "./Song.module.scss"

export const Song = ({ name, body, fontSize, loading }) => {
  return (
    <div className={st.content}>
      {loading ? <Loader/> : 
        <>
          <h2 className={st.name} style={{ fontSize: fontSize + 14 }}>
            {name}
          </h2>
          <br />
          <pre className={st.body} style={{ fontSize }}>
            {body}
          </pre>
        </>
      }
    </div>
  )
}
