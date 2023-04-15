import React, { useState } from "react";
import Register from "./Register";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import PoliceSign from "./PoliceSign";
import Footer from "./Footer";
import Home from "./home";
import NavbarLogin from "./NavbarLogin";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  var nvbr = <Navbar />;
  useState(() => {
    const token = cookies.get("TOKEN");
    if(token)
    {
      nvbr = <NavbarLogin />
    }
    else
    {
      nvbr = <Navbar />
    }
  })

  return (
    <>
      {nvbr}
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/login" element={<CitizenSign />} />
        <Route path="/police-login" element={<PoliceSign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lodgecomplain" element={<h1>lodge complain</h1>} />
        <Route path="/viewstats" element={<h1>stats</h1>} />
      </Routes>
      <Footer />
    </>
    

  );
}

export default App;
