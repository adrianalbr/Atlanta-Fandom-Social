import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import "./EditPost.css";
import Footer from "../../Components/Footer/Footer";

const EditPost = (props) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [url, setUrl] = useState("");
  const [contentText, setContentText] = useState("");
  const [redirect, setRedirect] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    console.log(props.token);
    if (id) {
      axios
        .get(`/api/content/${id}`, {
          headers: {
            Authorization: props.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          const { category, title, imageURL, url, contentText } = response.data;
          setCategory(category);
          setTitle(title);
          setImageURL(imageURL);
          setUrl(url);
          setContentText(contentText);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(id);
    axios
      .put(
        "/api/content/" + id,
        { category, title, imageURL, url, contentText },
        {
          headers: {
            Authorization: props.token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setRedirect("/profile");
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
        <div className="col s4">
          <Menu token={props.token} />
        </div>

        <div className="colForm col s8">
          <form className="colText s6">
            <div className="row">
              <div className="input-field col s8">
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
              <div className="input-field col s8">
                <input
                  className="inputClass"
                  placeholder="Enter a title"
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
              <div className="input-field col s8">
                <input
                  className="inputClass"
                  placeholder="Enter a URL"
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
              <div className="input-field col s8">
                <input
                  className="inputClass"
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
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input
                  className="inputClass"
                  placeholder="Adding a link?"
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
            <button className="editPostBTN" onClick={handleFormSubmit}>
              Done
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default EditPost;
