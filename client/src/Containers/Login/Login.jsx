import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import { Redirect } from "react-router-dom";
import ourLogo from "../.././assets-sort/icons/circle.png";

import "./Login.css";

import Logo from "../../assets-sort/logoBanner/logoAFS.png";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    localStorage.removeItem("loginKey");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/login", { username: userName, password: password })
      .then((res) => {
        localStorage.setItem("loginKey", res.data.token);
        props.setToken(res.data.token);
        setRedirect("/home");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data.error);
      });
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <div className={`alert alert-error`}>
        <p>{error}</p>
      </div>
      <div className="container containerOne center-align">
        <div className="row">
          <div className="col s12">
            <img
              className="formHeader"
              src={Logo}
              alt="Where Fans Come Together"
            ></img>
          </div>
        </div>
      </div>

      <div className="container formContainer">
        <div className="row">
          <div className="col s6">
            <form>
              <input
                type="text"
                name="username"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="formInput"
                placeholder="Username"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                required
              />
              <input
                type="password"
                name="password"
                className="formInput"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
              <input
                id="login"
                type="submit"
                className="submitButton"
                name="submitButton"
                onClick={handleSubmit}
                value="Login"
              />
            </form>
          </div>
          <div id="column2" className="col s6 center-align">
            <h5 className="goToSignUp">
              <img id="ourLogo1" src={ourLogo} />
              <p id="account">Don't have an account?</p>
            </h5>
            <button id="signUpButton">
              <a id="aTagLogin" href="/">
                Sign Up Here
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
