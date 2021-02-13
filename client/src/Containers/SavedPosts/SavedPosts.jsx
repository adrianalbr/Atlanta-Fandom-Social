import { React, useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Redirect } from "react-router-dom";
import axios from "axios";

const SavedPosts = (props) => {
  const [savedPosts, setSavedPosts] = useState([]);
  useEffect(() => {
    console.log("app.jsx");
    axios
      .get("/api/content/savedPosts", {
        headers: {
          Authorization: props.token,
        },
      })
      .then((res) => {
        setSavedPosts(res.data);
      });
  }, []);
  if (props.token === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Navbar />
      {savedPosts.map(
        ({ category, title, imageURL, date, contentText, author }, index) => (
          <div className="row" key={index}>
            <div className="card">
              <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <img src={imageURL}/>
                <p>{contentText}</p>
              </div>
              <div className="card-action">
                <div className="Author">
                  <h7>
                    Author: {author.firstName + " " + author.lastName},
                    Category: {category}, Date: {date.substring(0, 10)}
                  </h7>
                  <div />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SavedPosts;
