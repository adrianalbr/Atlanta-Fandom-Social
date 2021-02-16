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
              <NavLink to="/login">
                <button className="savedPostBTN ">
                  <i class="material-icons ">logout</i>
                  <br />
                  Logout
                </button>
              </NavLink>
            </li>

            <div className="emptyDiv"></div>

            <li>
              <NavLink to="/home">
                <button className="savedPostBTN ">
                  <i class="material-icons">home</i>
                  <br />
                  Home
                </button>
              </NavLink>
            </li>

            <div className="emptyDiv"></div>

            <li>
              <NavLink to="/post">
                <button className="savedPostBTN">
                  <i class="material-icons">create</i>
                  <br />
                  Create Post
                </button>
              </NavLink>
            </li>

            <div className="emptyDiv"></div>

            <li>
              <NavLink to="/savedPosts">
                <button className="savedPostBTN">
                  <i class="material-icons">save</i>
                  <br />
                  Saved Posts
                </button>
              </NavLink>
            </li>

            <div className="emptyDiv"></div>
            <li>
              <NavLink to="/profile">
                <button className="savedPostBTN">
                  <i class="material-icons">account_box</i>
                  <br />
                  My Posts
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
