import * as React from 'react'
import { AuthContext } from '../../../contexts/authContext/context'
import { Button } from '@mui/material'
import { useAuthService } from './useAuthService'

export function HomePage() {
  const authContext = React.useContext(AuthContext)
  const service = useAuthService()

  return (
    <div className={'HomePage'}>
      Home

      <br />
      <br />

      <Button
        variant='contained'
        onClick={service.makeAuthedRequest}
      >
        Authed Request
      </Button>

      <br />
      <br />

      <Button
        variant='contained'
        onClick={authContext.signout}
      >
        Logout
      </Button>
    </div>
  )
}