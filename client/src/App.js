import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import Profile from "./Containers/Profile/Profile";
import Post from "./Containers/Post/Post";
import EditPost from "./Components/EditPost/EditPost";
import SavedPosts from "./Containers/SavedPosts/SavedPosts";
import Axios from "axios";

// these are for Bonus when we get MVP working
// import WelcomeTopics from "./Containers/WelcomeTopics/WelcomeTopics";
// import WelcomeProfile from "./Containers/WelcomeProfile/WelcomeProfile";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  const [token, setToken] = useState(localStorage.getItem("loginKey"));
  const [name, setName] = useState("Welcome");

  useEffect(() => {
    if (token) {
      Axios.get("/api/user", {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        console.log(response.data.firstName);
        setName(response.data.firstName);
      });
    }
  }, []);

  if (token === null) {
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
            <Route
              exact
              path={["/post", "/home", "/profile", "/post/:id", "/savedPosts"]}
            >
              <Login setToken={setToken} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
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
            <Post token={token} name={name} />
          </Route>
          <Route exact path="/home">
            <Home token={token} name={name} />
          </Route>
          <Route exact path="/profile">
            <Profile token={token} name={name} />
          </Route>
          <Route exact path="/post/:id">
            <EditPost token={token} name={name} />
          </Route>
          <Route exact path="/savedPosts">
            <SavedPosts token={token} name={name} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
