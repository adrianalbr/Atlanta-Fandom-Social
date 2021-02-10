import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Post = (props) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [URL, setURL] = useState("");
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
          URL,
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
    <div>
      <Navbar />
      <div className="row">
        <form className="col s6" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="input-field col s6">
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
            <div className="input-field col m6">
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
            <div className="input-field col s6">
              <input
                placeholder="Enter a URL"
                id="URL"
                type="text"
                name="URL"
                value={URL}
                onChange={(e) => {
                  setURL(e.target.value);
                }}
              />
              <label htmlFor="URL">URL</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Enter your description"
                id="contentText"
                type="text"
                name="contentText"
                required
                value={contentText}
                onChange={(e) => {
                  setContentText(e.target.value);
                }}
              />
              <label htmlFor="contentText">description</label>
            </div>
          </div>
          <button className="createPostBTN">
            Create a Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
