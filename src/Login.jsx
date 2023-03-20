import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginLogo from "./LoginLogo.PNG";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (password.length <6) {
      console.warn("Add Your Password at least 6 char");
    } else if (email === "") {
      console.warn("enter email")
    } else {
      navigate("/Home");
    }
  };

  
    return (
      <div className="Login1">
        <div className="Login">
          <div className="LoginLeft">
            <h1>Welcome back to </h1>
            <h1>Pretty Login</h1>
            <p>It's great to have you back</p>
            <label htmlFor="Email">EMAIL</label>
            <br />
            <input placeholder="Enter Email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <br />
            <label htmlFor="PASSWORD">PASSWORD</label> <br />
            <input placeholder="Enter 6 Digit Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <br />
            <input className="checkbox" type="checkbox" />
            &nbsp;&nbsp;&nbsp;
            <span>Remember Me? </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Forgot password?</span>
            <br />
            <br />
            <div className="LoginLeftbutton">
              <button onClick={handleLogin()}>LOGIN</button>

              <button id="right">CREATE ACCOUNT</button>
            </div>
            <br />
            <div className="leftLogin">
              <p>Or login with</p>
              <span style={{ color: "#d430b4", cursor: "pointer" }}>
                Facebook
              </span>{" "}
              <span style={{ color: "#d430b4", cursor: "pointer" }}>
                Google
              </span>
            </div>
          </div>
          <div className="LoginRight">
            <img src={LoginLogo} alt="NOT" />
          </div>
        </div>
      </div>
    );
  
};

export default Login;
