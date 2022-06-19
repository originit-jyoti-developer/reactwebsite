import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Nav from "./Navbar";
const App = () => {
  return (
    <>
         <Nav />
      <Routes>
 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        
      </Routes>




    </>
  );
}

export default App;
