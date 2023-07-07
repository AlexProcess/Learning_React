import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crea tu cuenta">
      <form>
          <Grid container >
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre (Alex)"
              fullWidth>
            </TextField>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label="Email"
              type="email"
              placeholder="Alex@gmail.com"
              fullWidth>
            </TextField>
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label="Contraseña"
              type="password"
              placeholder="LacontraseñaMasSegura1234"
              fullWidth>
            </TextField>
            </Grid>
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb:2, mt: 1}}>
              <Grid item xs={ 12 } sm={6}>
                  <Button variant="contained" fullWidth>Crear cuenta</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container 
          direction="row"
          justifyContent="end">
          <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Crear una cuenta
            </Link>
          </Grid>
        </form>
    </AuthLayout>
        
  )
}
