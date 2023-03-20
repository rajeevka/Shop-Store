import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Contact from "./Contact";
import Users from "./Users";
import Products from "./Products";
import Details from "./Details";
import { useState } from "react";
function App() {
   const [detail, setdetail] = useState({})

  function detailingHandler(e) {
    setdetail(e)
    console.log(detail);
  }
  return (
    <div className="App">
      
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Products"
            element={<Products detailingHandler={detailingHandler} />}
          />
          <Route path="/Details" element={<Details detail={detail} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      
    </div>
  );
}

export default App;
