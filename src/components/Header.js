import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-green-100">
      <div className="flex items-center">
        {/* <img className="h-24" src={logo} /> */}
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          {/* <li className="px-4">onlineStatus: {onlineStatus ? "✅" : "🔴 "}</li> */}
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">{/* {} */}</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">
            <Link className="font-bold" to=""></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
