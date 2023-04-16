import * as React from "react";
import Box from "@mui/material/Box";

const HomePage = () => {
    return (
        <Box
            sx={{
                backgroundImage: "url('https://img.freepik.com/premium-photo/natural-marble-pattern-background_1258-22160.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: 1
            }}
        >
            <Box
                sx={{

                    position: "relative",
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    maxWidth: 600,
                    textAlign: "center",
                }}
            >
                <h1>Welcome to My Site!</h1>
                <p>Here police and citizen make contact between them</p>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 0,
                }}
            />
        </Box>
    );
};

export default HomePage;
