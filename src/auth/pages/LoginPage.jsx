import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { checkingAuth, startGoogleSignIn } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth)

  const isAuthLoading = useMemo(()=> status === 'checking')

  const dispatch = useDispatch()

  const {
    onInputChange,
    formState: {
      email,
      password,
    }
  } = useForm({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(checkingAuth())
    console.log(email, password)
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }


  return (

    <AuthLayout title='Loging'>
      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Correo"
              type="email"
              placeholder="name@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{mt:2}} >
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container
            spacing={2}
            sx={{mb:2, mt:1}}
          >

            <Grid item xs={12} sm={6} sx={{mt:2}}>
              <Button disabled={isAuthLoading} type="submit" variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{mt:2}}>
              <Button disabled={isAuthLoading} onClick={ onGoogleSignIn } variant='contained' fullWidth>
                <Google />
                <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
