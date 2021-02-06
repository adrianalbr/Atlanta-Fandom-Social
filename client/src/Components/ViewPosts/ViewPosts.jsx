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
        <div className="row">
          <div className="card">
            <div className="card-content white-text">
                  <span className="card-title">{title}</span>
                  <p>{contentText}</p>
                </div>
                <div className="card-action">
                  <p>Category: {category}, Date: {date}</p>
                 
                </div>
              </div>
            </div>
      ))}
    </>
  );
};

export default ViewPosts;
