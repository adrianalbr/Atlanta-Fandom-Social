import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className="btnDiv">
      <div className="row">
        <div className="buttons col s4">
          <ul>
            <li id="testHere">
              <button className="savedPostBTN ">
                <NavLink to="/login">
                  <i class="material-icons ">logout</i>
                  <br />
                  Logout
                </NavLink>
              </button>
            </li>
            <div className="emptyDiv"></div>
            <li>
              <button className="savedPostBTN ">
                <NavLink to="/home">
                  <i class="material-icons">home</i>
                  <br />
                  Home
                </NavLink>
              </button>
            </li>
            <div className="emptyDiv"></div>
            <li>
              <button className="savedPostBTN">
                <NavLink to="/post">
                  <i class="material-icons">create</i>
                  <br />
                  Create Post
                </NavLink>
              </button>
            </li>
            <div className="emptyDiv"></div>
            <li>
              <button className="savedPostBTN">
                <NavLink to="/savedPosts">
                  <i class="material-icons">save</i>
                  <br />
                  Saved Posts
                </NavLink>
              </button>
            </li>
            <div className="emptyDiv"></div>
            <li>
              <button className="savedPostBTN">
                <NavLink to="/profile">
                  <i class="material-icons">account_box</i>
                  <br />
                  My Posts
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
