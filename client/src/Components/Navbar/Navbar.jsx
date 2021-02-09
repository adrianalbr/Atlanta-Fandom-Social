import React from "react";
import "./Navbar.css";
import Cloak from "../../assets-sort/icons/cloak.png";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          {/* <a href="/Home" class="brand-logo">
            Logo */}
          {/* </a> */}
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">
                <i className="material-icons left">search</i>Search
              </a>
            </li>
            <li>
              <NavLink
                to="/home"
                activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/post"
                activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              >
                Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

