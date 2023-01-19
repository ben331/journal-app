import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { AuthLayout } from "../layout/AuthLayout"

const initialState = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value)=> value.includes('@'), 'El correo debe de tener una @'],
  password: [(value)=> value.length >= 6, 'La contraseña debe de tener al menos 6 digitos'],
  displayName: [(value)=> value.length >=1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const {
    onInputChange,
    formState,
    formState: {
      email,
      password,
      displayName,
    },
    isFormValid,
    formValid: {
      emailValid,
      passwordValid,
      displayNameValid,
    }
  } = useForm(initialState, formValidations)

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (

    <AuthLayout title='SignUp'>
      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name = "displayName"
              onChange={ onInputChange }
              value = { displayName }
              error = { !!displayNameValid }
              helperText = { displayNameValid || ''}
            />
          </Grid>

          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Correo"
              type="email"
              placeholder="name@mail.com"
              fullWidth
              name = "email"
              onChange={ onInputChange }
              value = { email }
              error = { !!emailValid }
              helperText = { emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{mt:2}} >
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name = "password"
              onChange={ onInputChange }
              value = { password }
              error = { !!passwordValid }
              helperText = { passwordValid }
            />
          </Grid>

          <Grid container
            spacing={2}
            sx={{mb:2, mt:1}}
          >

            <Grid item xs={12} sx={{mt:2}}>
              <Button disabled={!isFormValid} type="submit" variant='contained' fullWidth>
                SignUp
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Login
              </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
