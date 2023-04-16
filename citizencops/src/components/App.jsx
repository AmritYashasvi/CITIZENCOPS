import React from "react";
import Register from "./Register";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import CitizenSign from "./CitizenSign";
import PoliceSign from "./PoliceSign";
import Footer from "./Footer";
import Home from "./home";
import NavbarLogin from "./NavbarLogin";
import LodgeComplaint from "./LogdeComplaint";
import ComplaintComponent from "./ComplaintComponent";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarLogin />
      {/* <Complaint /> */}
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<CitizenSign />} />
        <Route path="/police-login" element={<PoliceSign />} />
        <Route path="/lodgecomplaint" element={<LodgeComplaint />} />
        <Route path="/complaintlist" element={<ComplaintComponent />} />
      </Routes>
      {/* <LodgeComplaint /> */}
      <Footer />
    </div>
    

  );
}

export default App;
