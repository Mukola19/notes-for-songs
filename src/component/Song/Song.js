import React from 'react'
import st from "./Song.module.css"

export const Song = ({ prewText }) => {
return(
<div className={st.textContent}>
      {/* <h2 className={st.name}>{prewText.name}</h2> */}
      <br/>
     {/* {prewText.body == '' ? null :<pre className={st.body}>{prewText.body}</pre>} */}

  </div>
)

}


