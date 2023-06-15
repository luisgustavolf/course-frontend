import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useLoginForm } from './useLoginForm'
import { ILoginFormValues } from './useLoginForm/iLoginFormValues'
import { AuthContext } from '../../../contexts/authContext/context'
import React from 'react'

import './styles.css'

export function LoginPage() {
  const authContext = React.useContext(AuthContext)
  const form = useLoginForm()
  const navigate = useNavigate()

  function handleSubmit(values: ILoginFormValues) {
    authContext.signin(values, () => navigate('/'))
  }

  return (
    <div className={'loginPage'}>
      <Card>
        <CardContent>
          <Typography variant='h5' gutterBottom>
            Login
          </Typography>

          <form onSubmit={form.handleSubmit(handleSubmit)}>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  control={form.control}
                  name='username'
                  render={({ field, fieldState }) =>
                    <TextField 
                      label={'Username'} 
                      fullWidth 
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                      {...field} 
                    />
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  control={form.control}
                  name='password'
                  render={({ field, fieldState }) =>
                    <TextField 
                      label={'Password'} 
                      type='password' 
                      fullWidth 
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                      {...field} 
                    />
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant={'contained'}
                  color={'primary'}
                  type='submit'
                  disabled={authContext.loading}
                  startIcon={authContext.loading && <CircularProgress size={20} color='inherit' />}
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>

        </CardContent>
      </Card>
    </div>
  )
}