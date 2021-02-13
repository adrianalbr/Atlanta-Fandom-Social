import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
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
      <Navbar />
      <div className="row">
        <div className="col s4">
          <Menu token={props.token} />
        </div>

        <div className="colForm col s8">
          <form className="col s8" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="input-field col s8">
                <input
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
                <label htmlFor="category">Category</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input
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
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input
                  placeholder="Enter image URL"
                  id="imageURL"
                  type="text"
                  name="imageURL"
                  value={imageURL}
                  onChange={(e) => {
                    setImageURL(e.target.value);
                  }}
                />
                <label htmlFor="imageURL">Image URL</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input
                  placeholder="Enter your description"
                  id="contentText"
                  type="text"
                  name="contentText"
                  value={contentText}
                  onChange={(e) => {
                    setContentText(e.target.value);
                  }}
                />
                <label htmlFor="contentText">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input
                  placeholder="Adding a link?"
                  id="url"
                  type="text"
                  name="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                />
                <label htmlFor="url">Adding a Link?</label>
              </div>
            </div>
            <button className="createPostBTN">Create a Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
