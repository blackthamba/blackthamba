import React from 'react';
import './App.css';
import AppBar from 'components/appbar';
import BlackThambaLandingPage from 'pages/home';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar />
      <Box
        className='wrapper'
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          width: '100%',
          minHeight: '100vh'
        }}
      >
        <Container
          maxWidth="xl"
          className='wrapper'
          sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          <BlackThambaLandingPage />
        </Container>
      </Box>
    </div>
  );
}

export default App;
