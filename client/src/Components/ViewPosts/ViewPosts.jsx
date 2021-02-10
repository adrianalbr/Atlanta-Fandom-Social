import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/content", {
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
    <>
      {posts.map(({ _id, category, title, date, contentText, author }) => (
        <div className="row">
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{contentText}</p>
            </div>
            <div className="card-action">
              <button onClick = {()=>{
                axios.put("/api/user/" +_id, {},{headers: {Authorization: props.token},})
                .then((res)=>{
                  console.log(res.data)
                })
              }}>
                <i className="fa fa-heart"></i> Fav
              </button>
              <div className="Author">
                <h7>
                  Author: {author.firstName +" "+ author.lastName}, Category: {category}, Date: {date}
                </h7>
                <div />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewPosts;
