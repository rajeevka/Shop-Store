import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbarin">
        <Link to="/Home">Home</Link>
        <Link to ="/Products">Products</Link>
        <Link to="/Users">Users</Link>
        <Link to="/Contact">Contact</Link>
              
      </div>
    </div>
  );
};

export default Navbar;
