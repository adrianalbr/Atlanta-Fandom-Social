import { React, useState } from "react";
import axios from "axios";
import { Alert } from "reactstrap";
import { Redirect } from "react-router-dom";
import ourLogo from "../.././assets-sort/icons/circle.png";

import "./Signup.css";
import Logo from "../../assets-sort/logoBanner/logoAFS.png";

const Signup = (props) => {
  const [userSignUp, setUserSignUp] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [redirect, setRedirect] = useState(null);

  const handleChange = (event) => {
    setUserSignUp({ ...userSignUp, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // call axios and connect to backend to insert details to our db using express routes
    axios
      .post("/api/signUp", userSignUp)
      .then((res) => {
        localStorage.setItem("loginKey", res.data.token);
        console.log(res.data);
        props.setToken(res.data.token);
        // after the response is successful redirect to /home
        setRedirect("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(Object.values(err.response.data));
        setErrors(Object.values(err.response.data.errors));
      });
  };
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <>
      {errors.map((error) => (
        <Alert color="danger">{error.message}!</Alert>
      ))}

      <div>
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

        <div className="container center-align formContainer">
          <div className="row rowTwo">
            <div className="col s6">
              <form>
                {/* <label htmlFor="firstName">First Name</label> */}
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={userSignUp.firstName}
                  className="formInput"
                  placeholder="First Name"
                  required
                />
                {/* <label htmlFor="lastName">Last Name</label> */}
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={userSignUp.lastName}
                  className="formInput"
                  placeholder="Last Name"
                  required
                />
                {/* <label htmlFor="Username">Username</label> */}
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={userSignUp.username}
                  className="formInput"
                  placeholder=" Username"
                  required
                />
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={userSignUp.email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  className="formInput"
                  placeholder="Email"
                  required
                />
                {/* <label htmlFor="password">Password</label> */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={userSignUp.password}
                  className="formInput"
                  placeholder="Password"
                  required
                />
                <input
                  id="signUp"
                  type="submit"
                  className="submitButton"
                  onClick={handleSubmit}
                  name="submitButton"
                  value="SignUp"
                />
              </form>
            </div>
            <div className="col s6 center-align">
              <h5 className="goToSignUp">
                <img id="ourLogo" src={ourLogo} />
                <br />
                <br />
                Already have an account? <br />
              </h5>
              <button id="loginButton" className="submitButton">
                <a id="loginAtag" href="/login">
                  Login Here
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
