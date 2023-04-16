import * as React from "react";
import Box from "@mui/material/Box";
import logo from "./logo.png";

const Home = () => {
    return (
        <Box
            sx={{
                backgroundImage:
                    "url('https://img.freepik.com/premium-photo/natural-marble-pattern-background_1258-22160.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            }}
        >
            <img
                src={logo}
                alt="Logo"
                width='100'
                height='100'
                style={{ position: "relative", top: -50, left:0 }}
            />
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    maxWidth: 800,
                    textAlign: "center"
                }}
            >
                <h1>CitizenCops</h1>
                <p>The Crime Record Web App is designed to provide users with a quick and easy way to stay informed about crime in their area and take steps to stay safe. The app features crime maps, statistics, reporting tools, safety tips, emergency contacts, and community features. Users can access all these features from the front page of the app, which includes a navigation bar, introduction, call-to-action button, feature highlights, and user testimonials. The app is user-friendly and helps users make informed decisions to keep themselves and their families safe.</p>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 0
                }}
            />
        </Box>
    );
};

export default Home;
