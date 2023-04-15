import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      
      
      <Box
        component="footer"
        sx={{
          py: 8,
          px: 4,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        
          
        <Container maxWidth="lg">
          <Typography variant="body1">

           The information on this website is provided 'as is' without warranty of any kind ,express or implied.
           A statement about the limitations of the information on the website and that the police department is not liable for any errors or omissions.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}