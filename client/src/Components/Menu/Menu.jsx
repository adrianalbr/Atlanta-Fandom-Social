import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <div>
      <div className="row">
        <div className="buttons col s4">
          <ul>
            <NavLink to="/savedPosts" className="savedPostBTN">
              Saved Posts
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

// <div class="list-group">
//     <a class="list-group-item" href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
//     <a class="list-group-item" href="#"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; Library</a>
//     <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Applications</a>
//     <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp; Settings</a>
// </div>
