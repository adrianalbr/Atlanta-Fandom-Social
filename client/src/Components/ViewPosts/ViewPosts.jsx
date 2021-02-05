import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/content").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  });
  return (
    <>
      
        <div className="container">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{title}</span>
                  <p>{contentText}</p>
                </div>
                <div class="card-action">
                  <a href="#">{category}</a>
                  <a href="#">{date}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default ViewPosts;
