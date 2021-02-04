import React from 'react';
// import "./Signup.css";

const Signup = () => {
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
                    name="firstName"
                    class="formInput"
                    placeholder="First Name"
                    required
                    />
                    <input
                    type="text"
                    name="lastName"
                    class="formInput"
                    placeholder="Last Name"
                    required
                    />
                    <input
                    type="text"
                    name="username"
                    class="formInput"
                    placeholder="Username"
                    required
                    />
                    <input
                    type="text"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    class="formInput"
                    placeholder="Email"
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
                <h6 className="goToSignUp">Already have an account</h6>
                </div>
            </div>
            </div>
        </div>
        <div class="rightSide"></div>
        </div>
    );
};

export default Signup;