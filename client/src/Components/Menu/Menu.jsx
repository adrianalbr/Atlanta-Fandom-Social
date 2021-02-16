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
                <i class="material-icons ">logout</i>
                <br />
                <NavLink to="/login">Logout</NavLink>
              </button>
            </li>

            <li>
              <button className="savedPostBTN ">
                <i class="material-icons">home</i>
                <br />
                <NavLink to="/home">Home</NavLink>
              </button>
            </li>

            <li>
              <button className="savedPostBTN">
                <i class="material-icons">create</i>
                <br />
                <NavLink to="/post">Create Post</NavLink>
              </button>
            </li>

            <li>
              <button className="savedPostBTN">
                <i class="material-icons">save</i>
                <br />
                <NavLink to="/savedPosts">Saved Posts</NavLink>
              </button>
            </li>

            <li>
              <button className="savedPostBTN">
                <i class="material-icons">account_box</i>
                <br />
                <NavLink to="/profile">My Posts</NavLink>
              </button>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
