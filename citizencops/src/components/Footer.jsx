import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GuestFooter() {
  return (
    <Paper
      sx={{
        // marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#f2f2f2'
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1
          }}
        >

        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            <a href="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a> | <a href="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</a>
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
