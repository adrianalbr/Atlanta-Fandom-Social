import React from "react";
import "./Navbar.css";
import { InputGroup, Button, InputGroupAddon, Input } from "reactstrap";
import Cloak from "../../assets-sort/icons/cloak.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" class="brand-logo"></a>
          {/* <ul id="nav-mobile" className="center hide-on-med-and-down"> */}
          {/* <li> */}
          <img src={ Cloak } alt="cloak" />
          <a href="/">Home</a>
          {/* </li> */}

          {/* <li> */}
          <div class="container">
            <form id="search-site" action="search" method="get">
              <InputGroup>
                <Input className="input-nav" style={{ width: "300px" }} />
                <InputGroupAddon addonType="append">
                  <Button color="secondary" style={{ marginTop: "10px" }}>
                    Search!
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </div>
          {/* </li> */}
          <div>
            <ul>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
