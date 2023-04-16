import React, { useState } from "react";
import Register from "./Register";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes"
import PoliceSign from "./PoliceSign";
import Footer from "./Footer";
import Home from "./home";
import NavbarLogin from "./NavbarLogin";
import CitizenSign from "./CitizenSign";
import LodgeComplaint from "./LogdeComplaint";
import ComplaintComponent from "./ComplaintComponent";
import NavbarPoliceLogin from "./NavbarPoliceLogin";

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<CitizenSign />} />
        <Route path="/police-login" element={<PoliceSign />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/lodgecomplaint" element={<LodgeComplaint />} />
          <Route path="/viewstats" element={<h1>stats</h1>} />
        </Route>
      </Routes>

      <Footer />
    </>
    

  );
}

export default App;
