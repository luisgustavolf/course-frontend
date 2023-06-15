import { CssBaseline } from '@mui/material';
import React from 'react';
import { AppRoutes } from './appRoutes';
import { AuthProvider } from './contexts/authContext/provider';

export function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </React.Fragment>
  );
}

