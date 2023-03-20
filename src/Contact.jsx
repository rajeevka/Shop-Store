import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import './Login.css'
const Contact = () => {
  return (
    <div >
      <Navbar />

      <h1 style={{ textAlign: "center", color: "red" }}>
        Contact Component is Under Developement
      </h1>
      <div className="logout">
        <Link to="/Login">
          <button>Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default Contact