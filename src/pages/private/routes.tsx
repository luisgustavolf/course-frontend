import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './home'

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}