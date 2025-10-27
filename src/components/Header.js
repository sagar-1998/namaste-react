import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <header className="header">
      <nav className="nav-bar">
        <img className="res-logo" src={LOGO_URL} alt="logo" />
        <ul className="nav-items">
          <li className="nav-link">
            <Link to="/"> Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-link">Cart</li>
          <li className="nav-link">
            <button
              className="login-btn"
              onClick={() =>
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
