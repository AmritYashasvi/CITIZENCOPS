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
import Cookies from "universal-cookie";
const cookies = new Cookies();
import axios from "axios";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import useState from 'react-usestateref'

function preventDefault(event) {
    event.preventDefault();
}

const theme = createTheme();

export default function Statistics(eve){

    const [city, setcity] = React.useState("");
    const [piedata, setpiedata, piedataRef] = useState([]);



  




    function handleChange(eve) {
      const cityy = eve.target.value;
      setcity(cityy);
    }

    const [rows, setRows] = React.useState([]);
    
    function handleSubmit(eve) {
      eve.preventDefault();
      const token = cookies.get("TOKEN");
      const configuration = {
        method: "get",
        url: "http://localhost:3004/" + city,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      axios(configuration)
        .then((result) => {
          setRows(result.data.result);
          // setMessage(result.data.message);
          console.log("1");
        })
        .catch((error) => {
          // error = new Error();
          console.log(error);
        });

        console.log(rows);
        // Murder, Robbery, Accident, Domestic-Violence, Others
        setpiedata(() => {
          var temp = [];
          var Murder = 0, Robbery = 0, Accident = 0, Domestic_Violence = 0, Others = 0;
          for(var i = 0; i < rows.length; i ++)
          {
            if(rows[i].type === 'Murder')
              Murder ++;
            else if(rows[i].type === 'Robbery')
              Robbery ++;
            else if(rows[i].type === 'Accident')
             Accident ++;
            else if(rows[i].type === 'Domestic-Violence')
              Domestic_Violence ++;
            else if(rows[i].type === 'Others')
              Others ++;
          }
          temp = [
            {
              name: 'Murder', value: Murder
            },
            {
              name: 'Robbery', value: Robbery
            },
            {
              name: 'Accident', value: Accident
            },
            {
              name: 'Domestic-Violence', value: Domestic_Violence
            },
            {
              name: 'Others', value: Others
            }
          ];
          console.log(temp);
          return temp;
        })

    }

    

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
                        value={city}
                        onChange={handleChange}
                    >
                        <MenuItem value="Ranchi">Ranchi</MenuItem>
                        <MenuItem value="Bokaro">Bokaro</MenuItem>
                        <MenuItem value="Girdih">Giridih</MenuItem>
                    </Select>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                </FormControl>
              </Grid>
            </Grid>
            
          </Box>
        </Box>
      </Container>
      <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={piedataRef.current}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
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
            <TableRow key={rows._id}>
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