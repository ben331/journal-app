import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { checkingAuth } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {

  const dispatch = useDispatch()

  const {
    onInputChange,
    onResetForm,
    formState: {
      email,
      password,
    }
  } = useForm({
    email: 'bengiguitar@gmail.com',
    password: '123456'
  })

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(checkingAuth())
    console.log(email, password)
  }

  const onGoogleSignIn = () => {
    dispatch(checkingAuth())
    console.log('google')
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
              <Button type="submit" variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{mt:2}}>
              <Button onClick={ onGoogleSignIn } variant='contained' fullWidth>
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
