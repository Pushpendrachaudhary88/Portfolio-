import React from "react"
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route Path="/Contact" element={<Contact />} />
        <Route path="/Navbar" element={<Navbar />} />



      </Routes>
      
      
      
     
      
    </div>
  );
}

export default App;
