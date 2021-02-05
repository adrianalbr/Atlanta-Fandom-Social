import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/content").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  },[]);
  return (
    <>
      {posts.map(({ category, title, date, contentText }) => (
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{title}</span>
                  <p>{contentText}</p>
                </div>
                <div className="card-action">
                  <a href="#">{category}</a>
                  <a href="#">{date}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewPosts;
