import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import "./Profile.css";

const Profile = (props) => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
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
  };

  const handleDelete = (_id) => {
    axios
      .delete("/api/content/" + _id, {
        headers: {
          Authorization: props.token,
        },
      })
      .then((response) => {
        getData();
      });
  };

  useEffect(() => {
    // api call to get all posts of that user
    getData();
  }, []);

  if (props.token === null) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div className="row">
        <Navbar />
        <div className="col s4">
          <Menu />
        </div>

        {posts.map(({ category, title, imageURL, url, date, contentText, _id }, index) => (
          <div className="col s5">
            <div className="row" key={index}>
              <div className="card">
                <div className="card-content white-text">
                  <span className="card-title">{title}</span>
                  <img className="cardImage" src={imageURL}/>
                  <a href={url}>URL</a>
                  <p>{contentText}</p>

                </div>
                <div className="card-action">
                  <button
                    className="deleteBTN"
                    onClick={() => {
                      handleDelete(_id);
                    }}
                  >
                    <i className="fa fa-trash-o"></i> Delete
                  </button>
                  <Link to={`/post/${_id}`}>
                    <button className="editBTN">
                      <i className="fa fa-pencil"></i> Edit
                    </button>
                  </Link>
                  <p>
                    Category: {category}, Date: {date.substring(0, 10)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
