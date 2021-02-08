import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/content").then((response) => {
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
                  <button>
                    <i className="fa fa-heart"></i> Fav
                  </button>
                  <button>
                    <i className="fa fa-pencil"></i> Update
                  </button>
                  <button>
                    <i className="fa fa-trash-o"></i> Delete
                  </button>
                <div className="Author">
                  <h8>Category: {category}, Date: {date}</h8>
                <div/>
                </div>
              </div>
          </div>
          </div>

      ))}
    </>
  );
};

export default ViewPosts;
