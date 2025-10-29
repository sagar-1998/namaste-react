import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
const Header = () => {
  const [btnName, setBtnName] = React.useState("Login");
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);
  return (
    <header className="header">
      <nav className="flex justify-between px-10 bg-amber-100 shadow-lg">
        <div>
          <img className="w-30 h-auto" src={LOGO_URL} alt="logo" />
        </div>
        <ul className="flex items-center">
          <li className="px-5">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-5">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5">Cart</li>
          <li className="px-5">
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
          <li className="px-5 font-bold text-lg">{userName}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
