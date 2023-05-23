import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Check from "../components/check";
const Index = () => {
  let name = "axcel";
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/check" element={<Check name={name} />} />
      </Routes>
    </div>
  );
};

export default Index;
