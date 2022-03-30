import React from "react"
import st from './Song.module.scss'


export const SongLetter = ({ name, body, fontSize }) => (
  <div className={st.songLetter}>
    <h2 className={st.name} style={{ fontSize: fontSize + 14 }}>
      {name}
    </h2>
    <br />
    <pre className={st.body} style={{ fontSize }}>
      {body}
    </pre>
  </div>
)
