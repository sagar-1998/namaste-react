import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="header">
      <nav className="nav-bar">
        <img className="res-logo" src={LOGO_URL} alt="logo" />
        <ul className="nav-items">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="nav-link">
            <Link to="/"> Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="nav-link">Cart</li>
          <li className="nav-link">
            <Link to={"/login"}>
              <button
                className="login-btn"
                onClick={() =>
                  setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
                }
              >
                {btnName}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
