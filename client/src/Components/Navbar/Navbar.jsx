import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" class="brand-logo"></a>
          <ul id="nav-mobile" className="center hide-on-med-and-down">
          <li>
              <img src="./assests-sort/icons/cloak.png" alt="cloak"/>
              <a href="badges.html">Posts</a>
            </li>
            
            <li>
              <div class="container">
              <form id="search-site"  action='search' method='get'>
                <div class="input-group">
                  <div class="input-field">
                  <input id="search" type="search" name='q'/>
                  <label class="label-icon" for="search">
                    <i class="material-icons" >search</i>
                  </label>
                  </div>
                  <button type="submit" class="input-group-addon btn">search</button>
                </div>
              </form>
            </div>
            </li>
            <li>
              <a href="badges.html">Posts</a>
            </li>
            <li>
              <a href="badges.html">Profile</a>
            </li>
            <li>
              <a href="collapsible.html">Other little buttons</a>
            </li>
          </ul>
        </div>
         
      </nav>
    </div>
  );
};

export default Navbar;
