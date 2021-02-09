import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";

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
  }


  const handleDelete = () => {
    axios
    .delete("/api/content/" + _id, {
      headers: {
        Authorization: props.token,
      },   
    })
    .then((response) => {
     getData();
    });

  }


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
      <div className="row">
        <Navbar />
        <div className="col s4">
          <Menu />
        </div>

        {posts.map(({ category, title, date, contentText,  _id }, index) => (
          <div className="col s5">
            <div className="row" key={index}>
              <div className="card">
                <div className="card-content white-text">
                  <span className="card-title">{title}</span>
                  <p>{contentText}</p>
                </div>
                <div className="card-action">
                  <button onClick={()=>{handleDelete(_id)}}>
                    <i className="fa fa-trash-o"></i> Delete
                  </button>
                  <button>
                    <i className="fa fa-pencil"></i> Update
                  </button>
                  <p>
                    Category: {category}, Date: {date}
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
