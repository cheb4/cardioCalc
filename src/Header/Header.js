import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Header;
