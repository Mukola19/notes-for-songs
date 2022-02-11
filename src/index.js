import React, { createContext } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import reportWebVitals from "./reportWebVitals"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const app = initializeApp({
  apiKey: "AIzaSyAWFkC05VYQBSW7YiEPmjvZ3g_SwdX8uQs",
  authDomain: "melnuk-band.firebaseapp.com",
  projectId: "melnuk-band",
  storageBucket: "melnuk-band.appspot.com",
  messagingSenderId: "41362272028",
  appId: "1:41362272028:web:2527e3576e72ac10c994d9",
  measurementId: "G-SLYRPFL7Z6",
})


export const Context = createContext(null)

const auth = getAuth(app)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ auth }}>
      <App auth={auth}/>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
