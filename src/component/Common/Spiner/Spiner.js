import React from 'react'
import st from './Spiner.module.css'
import imgSpiner from "../../../img/Spinner.svg"

export default () => (
        <div className={st.div}>
        <img src={imgSpiner } className={st.imgSpiner}/>
      </div>
    )