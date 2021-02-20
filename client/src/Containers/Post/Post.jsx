import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import Footer from "../../Components/Footer/Footer";
import "./Post.css";

const Post = (props) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [url, setUrl] = useState("");
  const [contentText, setContentText] = useState("");
  const [redirect, setRedirect] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(props.token);
    axios
      .post(
        "/api/content",
        {
          category,
          title,
          imageURL,
          url,
          contentText,
        },
        {
          headers: {
            Authorization: props.token,
          },
        }
      )
      .then((response) => {
        setRedirect("/home");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (props.token === null) {
    return <Redirect to="/login" />;
  }

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="main">
      <Navbar name={props.name}/>
      <div className="row">
        <div className="col s2">
          <Menu token={props.token} />
        </div>

        <div className="colForm col s9">
          <form className="colText s10" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="input-field col s10">
                <input
                  className="inputClass"
                  placeholder="Enter a Category"
                  id="category"
                  type="text"
                  name="category"
                  value={category}
                  required
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  className="inputClass"
                  placeholder="Enter a Title"
                  id="title"
                  type="text"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  className="inputClass"
                  placeholder="Enter image URL"
                  id="imageURL"
                  type="text"
                  name="imageURL"
                  value={imageURL}
                  onChange={(e) => {
                    setImageURL(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  className="inputClass"
                  placeholder="Enter your Description"
                  id="contentText"
                  type="text"
                  name="contentText"
                  value={contentText}
                  onChange={(e) => {
                    setContentText(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  className="inputClass"
                  placeholder="Adding a Link?"
                  id="url"
                  type="text"
                  name="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                />
              </div>
            </div>
            <button className="createPostBTN">Create a Post</button>
          </form>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default Post;
