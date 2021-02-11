import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Cloak from "../../assets-sort/icons/cloak.png";
import { NavLink } from "react-router-dom";
import API from "../../Utils/Api";

const Navbar = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    console.log("HANDLE SEARCH", event.target.value);
    setSearch(event.target.value);
    // let value = event.target.value;
    // setSearch(value);
  };

  const searchBtn = () => {
    console.log("testing search", search);
    API.getAuthor(search).then((res) => {
      console.log("RES", res)
    })
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          {/* <a href="/Home" class="brand-logo">
            Logo */}
          {/* </a> */}
          <button onClick={searchBtn}>Go</button>
          <div className="input-field col s4">
            <i className="material-icons prefix">search</i>

            <input
              type="text"
              placeholder="search"
              id="autocomplete-input"
              class="autocomplete red-text"
              onChange={(e) => handleSearch(e)}
            />
          </div>
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
