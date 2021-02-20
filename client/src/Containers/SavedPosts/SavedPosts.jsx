import { React, useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Menu from "../../Components/Menu/Menu";
import "./SavedPosts.css";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";
import Footer from "../../Components/Footer/Footer";

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
    <div className="main">
      <Navbar name={props.name}/>
      <div className="row">
        <div className="col s2">
          <Menu token={props.token} />
        </div>
        <div className="col s5">
          {savedPosts.map(
            (
              { category, title, imageURL, url, date, contentText, author },
              index
            ) => (
              <div className="row" key={index}>
                <div className="card">
                  <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p className="postInfo">
                      Posted by: {author.firstName + " " + author.lastName}
                    </p>
                    <br />
                    <img className="cardImage" src={imageURL} />
                    <p>{contentText}</p>
                    <br />
                    <a className="linkTag" href={url}>
                      {url.substring(0, 66)}
                    </a>
                    <br />
                    {category}
                    <br />
                    {date.substring(0, 10)}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="col s4">
          <UpcomingEvents />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default SavedPosts;
