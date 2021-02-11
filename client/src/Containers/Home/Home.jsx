import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Col, Row, Container } from "../../Components/Grid/Grid"
import Cardpost from "../../Components/Cardpost/Cardpost";
import Menu from "../../Components/Menu/Menu";
import ViewPosts from "../../Components/ViewPosts/ViewPosts";
import Navbar from "../../Components/Navbar/Navbar";
import { Redirect } from "react-router-dom";

const Home = (props) => {

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

  const addTofav = (id)=>{
    axios.put("/api/user/" +id, {},{headers: {Authorization: props.token},})
    .then((res)=>{
      console.log(res.data)
    })
  }

  if (props.token === null) {
    return <Redirect to="/login" />;
  }
  return (
  <div>
    <Navbar />
    <div className="row">
      {/* 6-columns (one-half) */}
      <div className="col s4">
        <Menu token={props.token} />
      </div>
      {/* 6-columns (one-half) */}
      <div className="col s5">
        <ViewPosts token={props.token} posts = {posts} addTofav = {addTofav} />
      </div>
    </div>
  </div>
  );
};

export default Home;
