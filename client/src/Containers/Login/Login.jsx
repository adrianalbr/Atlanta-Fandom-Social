import axios from "axios";
import React, { useState } from "react";
import { Alert } from "reactstrap";
import { Redirect } from "react-router-dom";

import "./Login.css";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/login", { username: userName, password: password })
      .then((res) => {
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
    <div>
      {error !== "" ? <Alert color="danger">{error}</Alert> : ""}
      <div className="titleHeaderContainer">
        <h2 className="formHeader">Welcome to ATL Fandom Social</h2>
        <div className="formContainer">
          <div className="leftSide">
            <div className="formContentContainer">
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
                  type="submit"
                  className="submitButton"
                  name="submitButton"
                  onClick={handleSubmit}
                  value="Login"
                />
              </form>
              <h6 className="goToSignUp">
                Don't have an account <a href="/">Sign Up Here</a>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
