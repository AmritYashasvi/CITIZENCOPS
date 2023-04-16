import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(date, type, subject, description, solved) {
  return { date, type, subject, description, solved };
}

const rows = [
  createData(
    '12-02-2004',
    'Murder',
    'Thappad',
    'Mujhe maara',
    'Solved'
  ),
  createData(
    '13-01-2007',
    'Robbery',
    'Loota',
    'Mereko loot liya',
    'Unsolved'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ComplaintComponent() {
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
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows) => (
            <TableRow key={rows.id}>
              <TableCell>{rows.date}</TableCell>
              <TableCell>{rows.type}</TableCell>
              <TableCell>{rows.subject}</TableCell>
              <TableCell>{rows.description}</TableCell>
              <TableCell>{rows.solved}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}