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
                <i id="iconTest" class="material-icons ">logout</i>
                <br/>
                <NavLink to="/login" >
                  Logout
                </NavLink>
              </button>
            </li>


              <br/>
            
            <NavLink to="/home" className="savedPostBTN">
              <i class="material-icons">home</i>
              Home
            </NavLink>
            <NavLink to="/post" className="savedPostBTN">
              <i class="material-icons">create</i>
              Create Post
            </NavLink>
            <NavLink to="/savedPosts" className="savedPostBTN">
              <i class="material-icons">save</i>
              Saved Posts
            </NavLink>
            <NavLink to="/profile" className="savedPostBTN">
              <i class="material-icons">account_box</i>
              My Posts
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
