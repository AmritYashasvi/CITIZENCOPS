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
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, Select, MenuItem } from '@mui/material';

function preventDefault(event) {
    event.preventDefault();
}

const theme = createTheme();

export default function Statistics(){

    const [rows, setRows] = React.useState([]);

    // const configuration = {
    //     method: "get",
    //     url: "http://localhost:3004/user-complaint",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
  
    //   axios(configuration)
    //     .then((result) => {
    //       setRows(result.data.result);
    //       setMessage(result.data.message);
    //     })
    //     .catch((error) => {
    //       error = new Error();
    //     });
    // },[])

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
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                        labelId="city"
                        id="city"
                        name="city"
                        label="City"
                        onChange={onchange}
                    >
                        <MenuItem value="Ranchi">Ranchi</MenuItem>
                        <MenuItem value="Bokaro">Bokaro</MenuItem>
                        <MenuItem value="Girdih">Giridih</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      <br></br>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Type</b></TableCell>
            <TableCell><b>Subject</b></TableCell>
            <TableCell><b>Description</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows) => (
            <TableRow key={rows.id}>
              <TableCell>{rows.date}</TableCell>
              <TableCell>{rows.type}</TableCell>
              <TableCell>{rows.subject}</TableCell>
              <TableCell>{rows.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ThemeProvider>
    );

}