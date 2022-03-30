import React, { createContext } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { QueryParamProvider } from 'use-query-params'
import { store } from './store/store'
import App from "./App"
import "./index.scss"
import { Route } from "react-router-dom"







ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)











// import React from "react"
// import ReactDOM from "react-dom"
// import "./index.css"
// import App from "./App"
// import reportWebVitals from "./reportWebVitals"
// import { Provider } from "react-redux"
// import { initializeApp } from "firebase/app"
// import { createStore, combineReducers } from "redux"
// import {  ReactReduxFirebaseProvider,  firebaseReducer } from "react-redux-firebase"
// // import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

// const fbConfig = {
//   apiKey: "AIzaSyAWFkC05VYQBSW7YiEPmjvZ3g_SwdX8uQs",
//   authDomain: "melnuk-band.firebaseapp.com",
//   projectId: "melnuk-band",
//   storageBucket: "melnuk-band.appspot.com",
//   messagingSenderId: "41362272028",
//   appId: "1:41362272028:web:2527e3576e72ac10c994d9",
//   measurementId: "G-SLYRPFL7Z6",
// }

// const rrfConfig = {
//   userProfile: "users",
// }

// // Initialize firebase instance
// const firebaseApp = initializeApp(fbConfig)

// const auth = getAuth()

// // Add firebase to reducers
// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
//   // firestore: firestoreReducer // <- needed if using firestore
// })

// // Create store with reducers and initial state
// const initialState = {}
// const store = createStore(rootReducer, initialState)

// const rrfProps = {
//   firebase: firebaseApp,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   // createFirestoreInstance // <- needed if using firestore
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ReactReduxFirebaseProvider {...rrfProps}>
//         <App />
//       </ReactReduxFirebaseProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// )

// reportWebVitals()
