import * as React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from './contexts/authContext/context'
import { HomePage } from './pages/private/home'
import { LoginPage } from './pages/public/login'

export function AppRoutes() {
  const authContext = React.useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>

        {authContext.isAuth &&
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Route>
        }

        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<Navigate to={'/login'} />} />
      </Routes>
    </BrowserRouter>
  )
}