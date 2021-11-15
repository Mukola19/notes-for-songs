import React from 'react'
import st from "./TextContent.module.css"

export const TextContent = ({prewText}) => {
return(
<div className={st.textContent}>
      <h2>{prewText.name}</h2>
      <br/>
     {prewText.body == '' ?null :<pre>{prewText.body}</pre>}

  </div>
)

}


