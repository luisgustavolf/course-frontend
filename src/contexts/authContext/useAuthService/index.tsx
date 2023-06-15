import * as React from 'react'
import { AuthService } from '../../../services/course/authService'
import { ISigninBody } from '../../../services/course/authService/iSigninBody'
import { AuthInforStorage } from '../../../storage/authInfo'

export function useAuthService() {
  const [isAuth, setIsAuth] = React.useState(() => AuthInforStorage.exists())
  const [loading, setLoading] = React.useState(false)

  const signin = React.useCallback(async (values: ISigninBody, onSuccess: () => void) => {
    try {
      setLoading(true)
      const response = await AuthService.signin(values)
      AuthInforStorage.save({ token: response.access_token })
      setLoading(false)
      setIsAuth(true)
      onSuccess()
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])
  
  const signout = React.useCallback(() => {
    AuthInforStorage.clear()
    setIsAuth(false)
  }, []) 

  return {
    loading,
    isAuth,
    signin,
    signout
  }
}