import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';
import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

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

    const [complaintData, setComplaintData] = React.useState({
        subject: "",
        description: "",
        type: "Others"
  })

  function onchange(eve) {
      const name = eve.target.name;
      const value = eve.target.value;
      setComplaintData((prev) => {
          return {...prev, [name]: value};
      });
  }






  async function handleSubmit(event) {
    event.preventDefault();
    console.log(complaintData);
    const token = cookies.get("TOKEN");
    const configuration = await {
      method: "post",
      url: "http://localhost:3004/lodge-complain",
      data: complaintData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      }
    };

    axios(configuration).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });

    alert("submitted");
    window.location.href = "/";

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
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Lodge your Complaint
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="subject"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  value={complaintData.subject}
                  onChange={onchange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  name="description"
                  required
                  id="description"
                  value={complaintData.description}
                  onChange={onchange}
                  minRows={4}
                  placeholder="Describe"
                  style={{width: 400}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type"
                        name="type"
                        value={complaintData.type}
                        label="Type"
                        onChange={onchange}
                    >
                        <MenuItem value="Murder">Murder</MenuItem>
                        <MenuItem value="Robbery">Robbery</MenuItem>
                        <MenuItem value="Accident">Accident</MenuItem>
                        <MenuItem value="Domestic-Violence">Domestic Violence</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Submit record
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}