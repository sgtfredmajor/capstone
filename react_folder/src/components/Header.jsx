import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <div>
        <h1 style={h1Style}>App Track</h1>
      </div>
      <div align="right">
        <button style={login}>Login</button>
        <button style={signUp}>Sign Up</button>
      </div>
    </header>
  );
}

const headerStyle = {
  background: "#32b1c2",
  color: "#fff",
};

const h1Style = {
  textAlign: "left",
  fontFamily: "Oswald",
  fontSize: "20px",
  textAlign: "center",
};

const login = {
  fontFamily: "Oswald",
  fontSize: "14px",
  borderRadius: "10px",
};

const signUp = {
  fontFamily: "Oswald",
  fontSize: "14px",
  borderRadius: "10px",
  textAlign: "center",
};
export default Header;
