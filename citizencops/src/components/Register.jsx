import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        CITIZENCOPS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

//   name: String,
//   aadhar: Number,
//   dob: Date,
//   state: String,
//   city: String,
//   phoneno: Number,
//   email: String

export default function Register() {

    const [regData, setRegData] = React.useState({
        name: "",
        aadhar: "",
        dob: "2000-01-01",
        city: "",
        phoneno: "",
        email: "",
        password: ""
  })

  function onchange(eve) {
      const name = eve.target.name;
      const value = eve.target.value;
      setRegData((prev) => {
          return {...prev, [name]: value};
      });
  }






  function handleSubmit(event) {
    event.preventDefault();
    console.log(regData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField

                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  value={regData.name}
                  onChange={onchange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="aadhar"
                  required
                  fullWidth
                  id="aadhar"
                  label="Aadhar"
                  type="number"
                  value={regData.aadhar}
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField  required fullWidth name="dob" label="Date of birth" type="date" value={regData.dob} onChange={onchange} />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                        labelId="city"
                        id="city"
                        name="city"
                        value={regData.city}
                        label="City"
                        onChange={onchange}
                    >
                        <MenuItem value="Ranchi">Ranchi</MenuItem>
                        <MenuItem value="Bokaro">Bokaro</MenuItem>
                        <MenuItem value="Girdih">Giridih</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="phoneno"
                  required
                  fullWidth
                  id="phoneno"
                  label="Phone Number"
                  type="number"
                  value={regData.phoneno}
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  type="email"
                  value={regData.email}
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  value={regData.password}
                  onChange={onchange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}