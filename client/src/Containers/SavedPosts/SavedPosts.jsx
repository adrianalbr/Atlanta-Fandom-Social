import { React, useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Menu from "../../Components/Menu/Menu";

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
      <div className="row">
        <div className="col s4">
          <Menu token={props.token} />
        </div>
        <div className="col s5">
        {savedPosts.map(
          ({ category, title, imageURL, url, date, contentText, author }, index) => (
            <div className="row" key={index}>
              <div className="card">
                <div className="card-content white-text">
                  <span className="card-title">{title}</span>
                  <img src={imageURL} />
                  <p>{contentText}</p>
                  <a href={url}>{url}</a>
                </div>
                <div className="card-action">
                  <div className="Author">
                    <h7>
                      Author: {author.firstName + " " + author.lastName},
                      Category: {category}, Date: {date}
                    </h7>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          )
        
        )}
        </div>
      </div>
    </div>
  );
};

export default SavedPosts;
