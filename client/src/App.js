
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import "./App.css"
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import WelcomeProfile from "./Containers/WelcomeProfile/WelcomeProfile";
import WelcomeTopics from "./Containers/WelcomeTopics/WelcomeTopics";
import Post from "./Containers/Post/Post";


const App = withRouter(({ location })=> {
  const loginorsignup= location.pathname === '/login' || location.pathname === '/signup'

  return (
    <div className="App">
      {
         !loginorsignup && <Navbar/>
      }
          <Route exact path={["/", "/signup"]}>
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Post">
            <Post />
          </Route>
          <Route exact path="/Home">
          <Home />
          </Route>
    </div>
      
  )
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
