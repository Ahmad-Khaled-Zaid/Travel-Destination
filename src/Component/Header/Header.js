import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 id="Header">Travel Destination</h1>
    </React.Fragment>
  );
}
export default Header;
