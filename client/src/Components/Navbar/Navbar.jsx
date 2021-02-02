import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" class="brand-logo">
          </a>
          <ul id="nav-mobile" className="center hide-on-med-and-down">
            <li>
              <a href="sass.html">Search</a>
            </li>
            <li>
              <a href="badges.html">Post</a>
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
