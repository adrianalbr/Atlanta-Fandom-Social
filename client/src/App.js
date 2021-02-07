
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import WelcomeProfile from "./Containers/WelcomeProfile/WelcomeProfile";
import WelcomeTopics from "./Containers/WelcomeTopics/WelcomeTopics";
import Post from "./Containers/Post/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
        </Switch>     
      </div>
    </Router>
)}

export default App;
