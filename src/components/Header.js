import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <header className="header">
      <nav className="nav-bar">
        <img className="res-logo" src={LOGO_URL} alt="logo" />
        <ul className="nav-items">
          <li className="nav-link">Home</li>
          <li className="nav-link">About Us</li>
          <li className="nav-link">Contact Us</li>
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
