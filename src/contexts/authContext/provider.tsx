import { AuthContext } from './context'
import { useAuthService } from './useAuthService'

export interface AuthProviderProps {
  children?: any
}

export function AuthProvider(props:AuthProviderProps) {
  const service = useAuthService()

  return (
    <AuthContext.Provider value={service}>
      {props.children}
    </AuthContext.Provider>
  )
}