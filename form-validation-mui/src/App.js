import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RegistrationPage from './pages/registrationPage/RegistrationPage'; // Corrected path

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    success: { main: '#4caf50' },
    error: { main: '#f44336' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegistrationPage />
    </ThemeProvider>
  );
}

export default App;