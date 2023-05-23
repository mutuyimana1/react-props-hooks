import React from "react";
import "./homeLayout.css";
import About from "../pages/about";
import Contact from "../pages/contact";
function HomeLayout({ children }) {
  return (
    <div className="home-container">
      <About />
      <div style={{ minHeight: "100%" }}>{children}</div>
      <Contact />
    </div>
  );
}

export default HomeLayout;
