import React, { useState } from "react";
// import "./Login.css";

function Login() {
    const [userName, setUserName] = useState("");
    const [password , setPassword] = useState("");



return (
    <div>
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
                class="formInput"
                placeholder="Email or Username"
                required
                />
                <input
                type="password"
                name="password"
                class="formInput"
                placeholder="Password"
                required
                />
                <input
                type="submit"
                class="submitButton"
                name="submitButton"
                 value="Login"
                />
            </form>
            <h6 className="goToSignUp">Don't have an account</h6>
            </div>
        </div>
        </div>
    </div>
    <div class="rightSide"></div>
    </div>
);
}

export default Login;
