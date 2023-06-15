import * as React from 'react'
import { AuthService } from '../../../../services/course/authService'

export function useAuthService() {
  const [loading, setLoading] = React.useState(false)

  const makeAuthedRequest = React.useCallback(async () => {
    try {
      setLoading(true)
      const response = await AuthService.authed()
      alert(JSON.stringify(response))
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])
  
  return {
    loading,
    makeAuthedRequest
  }
}