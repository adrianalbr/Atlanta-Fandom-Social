import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import WelcomeProfile from "./Containers/WelcomeProfile/WelcomeProfile";
import WelcomeTopics from "./Containers/WelcomeTopics/WelcomeTopics";
import Post from "./Containers/Post/Post";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
   
  }, [token]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "/signup"]}>
            <Signup setToken={setToken} />
          </Route>
          <Route exact path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route exact path="/post">
            <Post token={token} />
          </Route>
          <Route exact path="/Home">
            <Home token={token} />
          </Route>
          <Route exact path="/profile">
            <WelcomeProfile token={token} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
