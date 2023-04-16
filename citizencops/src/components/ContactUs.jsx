import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(Sno, Name, Designation, TelOffice, EMailId) {
  return { Sno, Name, Designation, TelOffice, EMailId };
}

const rows = [
  createData(
    1,
    'Shri Vivek Gogia, IPS',
    'Director, Ranchi Office',
    '011-26782253',
    'director@ranchi.gov.in',
  ),
  createData(
    2,
    'Shri Sanjay Mathur, IPS',
    'Director, Bokaro Office',
    '011-26782252',
    'director@bokaro.gov.in',
  ),
  createData(
    3,
    'Shri Deepak M. Damor, IPS',
    'Director, Giridih Office',
    '011-26782547',
    'director@giridih.gov.in',
  ),
  createData(
    4,
    'Shri Vinay Kumar Pandey',
    'Chief Statistician, Ranchi',
    '011-26735508',
    'csncrb@ranchi.gov.in',
  ),
  createData(
    5,
    'Ms. Neha Champawat',
    'Chief Statistician, Bokaro',
    '011-26735513',
    'csncrb@bokaro.gov.in',
  ),
  createData(
    6,
    'Dr. Prashun Gupta',
    'Chief Statistician, Giridih',
    '011-26735637',
    'csncrb@giridih.gov.in',
  ),
  createData(
    7,
    'Shri S. K. Saxena',
    'Dy. Director, Ranchi',
    '011-26735640',
    'sksaxena@ranchi.gov.in',
  ),
  createData(
    8,
    'Shri Dhirendra Kumar Yadav',
    'Dy. Director, Bokaro',
    '011-26735641',
    'dkyadav@bokaro.gov.in',
  ),
  createData(
    9,
    'Ms. Priyanka Meena',
    'Dy. Director, Giridih',
    '011-26735642',
    'pmeena@giridih.gov.in',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ContactUs() {
  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Tel.- Office</TableCell>
            <TableCell>E-mail id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Sno}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Designation}</TableCell>
              <TableCell>{row.TelOffice}</TableCell>
              <TableCell>{row.EMailId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}