import React from "react";
import "./Navbar.css";
import Cloak from "../../assets-sort/icons/cloak.png";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <ul className="left">
            <li>
              <div className="cloakDiv col s1">
                <img className="cloak" src={Cloak} alt="Strange cloak" />
              </div>
            </li>
            <li>
              <div className="nameDiv l1">
                <h4> {props.name}</h4>
              </div>
            </li>
            <li>
              <div className="input-field col s4">
                <input
                  type="text"
                  placeholder="Search"
                  id="autocomplete-input"
                  className="autocomplete red-text"
                  onChange={props.handleChange}
                />
              </div>
            </li>
          </ul>
          <ul className="right hide-on-med-and-down">
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
                Create Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              >
                My Posts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
