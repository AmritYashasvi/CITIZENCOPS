import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();




function preventDefault(event) {
  event.preventDefault();
}

export default function Pending() {

  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const token = cookies.get("POLICETOKEN");

    const configuration = {
      method: "get",
      url: "http://localhost:3004/pending",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        setRows(result.data.result);
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  });



  return (
    <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
      {/* <Title>Your Compaints</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Type</b></TableCell>
            <TableCell><b>Subject</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Status</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows,idx) => (
            <TableRow key={rows._id}>
              <TableCell>{rows.date}</TableCell>
              <TableCell>{rows.type}</TableCell>
              <TableCell>{rows.subject}</TableCell>
              <TableCell>{rows.description}</TableCell>
              <TableCell><Button variant="contained" onClick={(e)=>{
                
                const token = cookies.get("POLICETOKEN");

                const configuration = {
                  method: "patch",
                  url: "http://localhost:3004/update",
                  data: {cid: rows._id},
                  headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                };

                axios(configuration);
                location.reload();
              }}>✔</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}