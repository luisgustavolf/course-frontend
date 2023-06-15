import * as React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/public/login'
import { AuthContext } from './contexts/authContext/context'
import { PrivateRoutes } from './pages/private/routes'

export function AppRoutes() {
  const authContext = React.useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>

        {authContext.isAuth &&
          <Route path='/*' element={<PrivateRoutes />} />
        }

        <Route path='/login' element={<LoginPage />} />

        {!authContext.isAuth &&
          <Route path='*' element={<Navigate to={'/login'} />} />
        }
      </Routes>
    </BrowserRouter>
  )
}