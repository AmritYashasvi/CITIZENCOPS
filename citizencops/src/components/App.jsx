import React from "react";
import Register from "./Register";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import CitizenSign from "./CitizenSign";
import PoliceSign from "./PoliceSign";
import Footer from "./Footer";
import Home from "./home";
import NavbarLogin from "./NavbarLogin";

function App() {
  return (
    <div>
      <Navbar />
      {/* <NavbarLogin /> */}
      <Home />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<CitizenSign />} />
        <Route path="/police-login" element={<PoliceSign />} />
      </Routes>
      <Footer />
    </div>
    

  );
}

export default App;
