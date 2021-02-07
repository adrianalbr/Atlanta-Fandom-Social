import { React, useState, useEffect } from "react";
import axios from "axios";
// import "./WelcomeProfile.css";

const WelcomeProfile = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // api call to get all posts of that user
    axios
      .get("/api/content/user", {
        headers: {
          Authorization: props.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      });
  }, []);

  return (
    <div>
      <div className="MainContainer">
        <h2 className="Header">Welcome to ATL Fandom Social</h2>
        <h5 className="Subtitle">Please Choose a Profile Picture</h5>
        <div className="ContentContainer"></div>
      </div>

      {posts.map(({ category, title, date, contentText }, index) => (
        <div className="row" key={index}>
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{contentText}</p>
            </div>
            <div className="card-action">
              <p>
                Category: {category}, Date: {date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WelcomeProfile;
