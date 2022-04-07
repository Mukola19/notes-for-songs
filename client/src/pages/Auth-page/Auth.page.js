import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { yupResolver } from "@hookform/resolvers/yup"
import { login, registration } from "../../store/user/userThunk"
import { appLoading } from "../../store/app/appSelector"
import { Loader } from "../../commons/Loader/Loader"
import { validAuth } from "../../utils/validation"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import st from "./Auth.page.module.scss"


export const AuthPage = () => {
  const loading = useSelector(appLoading)
  const [isLogin, setIsLogin] = useState(true)
  const dispatch = useDispatch()

  const useform = { resolver: yupResolver(validAuth()) }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(useform)

  const sendForm = (data) => {
    const { email, displayName, password } = data
    isLogin
    ? dispatch(login({ email, password }))
    : dispatch(registration({ email, displayName, password }))
  }

  const changeIsLogin = e => {
    e.preventDefault()
    setIsLogin(!isLogin)
    reset()
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
          {isLogin ? 'Вхід' : 'Реєстрація'}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(sendForm)}
            noValidate
            sx={{ mt: 1 }}
          >
            {isLogin ? null : (
              <TextField
                margin="normal"
                required
                fullWidth
                error={errors["displayName"]}
                label={errors["displayName"]?.message || "І'мя"}
                {...register("displayName")}
                autoComplete="off"
                autoFocus={!isLogin}
              />
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              error={errors["email"]}
              label={errors["email"]?.message || "Логін"}
              {...register("email")}
              autoComplete="email"
              autoFocus={isLogin}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type='password'
              error={errors["password"]}
              label={errors["password"]?.message || "Пароль"}
              {...register("password")}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogin ? "Війти" : "Заєструватись"}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="" variant="body2" onClick={changeIsLogin}>
                  {isLogin ? "Немає акаунта? Заєструватись" : "Є акаунт? Війти"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )
}
