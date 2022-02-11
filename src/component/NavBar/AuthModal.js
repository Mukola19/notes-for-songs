import React, {  useContext } from "react"
import { Button,  Card } from "react-bootstrap"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { Context } from "../.."



export const AuthModal = ({ handleClose }) => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    handleClose(false)
  }

  return (
    <Card>
        <Button variant="success" onClick={login}>
          Війти через Google
        </Button>
    </Card>
  )
}