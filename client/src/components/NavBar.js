import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/Login">
        Login
      </NavLink>
      <NavLink exact to="/Register">
        Register
      </NavLink>
    </nav>
  );
}

export default NavBar;