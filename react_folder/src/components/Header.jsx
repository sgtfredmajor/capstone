import React from "react";
import { Link } from "react-router-dom";
import AppTrack from "../images/AppTrack.png";

function Header() {
  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>App Track</div>
        <div style={buttons}>
          <button style={login}>Login</button>
          <button style={signUp}>Sign Up for Free</button>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  background: "#e6e8ed",
  margin: "0",
};

const h1Style = {
  margin: "0",
  display: "flex",
  flexDirection: "row",
  flexGrow: "0",
  alignItems: "center",
  height: "50px",
  marginLeft: "30px",
  fontSize: "36px",
  fontFamily: "Comfortaa, cursive",
  color: "#68696b",
};

const buttons = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginRight: "10px",
  paddingBottom: "10px",
};

const login = {
  borderRadius: "10px",
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  height: "30px",
  background: "none",
  border: "solid 2px #1c53df",
  color: "#1c53df",
};

const signUp = {
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  borderRadius: "10px",
  height: "30px",
  background: "#1c53df",
  color: "white",
};
export default Header;
