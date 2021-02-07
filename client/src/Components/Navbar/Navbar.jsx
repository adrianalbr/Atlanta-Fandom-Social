import React from "react";
import "./Navbar.css";
import Cloak from "../../assets-sort/icons/cloak.png";
import {
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          {/* <a href="/Home" class="brand-logo">
            Logo */}
          {/* </a> */}
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i class="material-icons left">search</i>Search
              </a>
            </li>
            <li>
              <NavLink to="./Home" activeStyle={{backgroundColor: "rgba(0,0,0,0.1)"}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="./Post" activeStyle={{backgroundColor: "rgba(0,0,0,0.1)"}}>Post</NavLink>
            </li>
            <li>
            <NavLink to="./Profile" activeStyle={{backgroundColor: "rgba(0,0,0,0.1)"}}>Profile</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <nav>
//         <div className="nav-wrapper">
//           <a href="/Home" class="brand-logo"></a>

//           {/* <img src={ Cloak } alt="cloak" /> */}
//           <a href="/Home">Home</a>

//           <div class="container">
//             <form id="search-site" action="search" method="get">
//               <InputGroup>
//                 <Input className="input-nav" style={{ width: "200px" }} />
//                 <InputGroupAddon addonType="append">
//                   <Button color="secondary" style={{ marginTop: "10px" }}>
//                     Search!
//                   </Button>
//                 </InputGroupAddon>
//               </InputGroup>
//             </form>
//           </div>
//           {/* </li> */}
//           <div>
//             <ul>
//               <li>
//                 <NavLink to="/post">Post</NavLink>
//               </li>
//               <li>
//                 <a href="/">Profile</a>
//               </li>
//               <li>
//                 <a href="/signup">LogOut</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
