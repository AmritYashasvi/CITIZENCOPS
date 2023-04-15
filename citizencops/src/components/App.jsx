import React from "react";
import Register from "./Register";
import CitizenSign from "./CitizenSign";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<CitizenSign />} />
        <Route path="/copslogin" element={<h1>cops login</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/lodgecomplain" element={<h1>lodge complain</h1>} />
        <Route path="/viewstats" element={<h1>stats</h1>} />
      </Routes>
    </>
  );
}

export default App;
