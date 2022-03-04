import React from "react"
import st from './SongLetter.module.scss'


export const SongLetter = ({ name, body, fontSize }) => (
  <>
    <h2 className={st.name} style={{ fontSize: fontSize + 14 }}>
      {name}
    </h2>
    <br />
    <pre className={st.body} style={{ fontSize }}>
      {body}
    </pre>
  </>
)
