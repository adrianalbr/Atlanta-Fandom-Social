import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Col, Row, Container } from "../../Components/Grid/Grid"
// import Cardpost from "../../Components/Cardpost/Cardpost";
import "../../Components/Cardpost/Cardpost.css";
import Menu from "../../Components/Menu/Menu";
import ViewPosts from "../../Components/ViewPosts/ViewPosts";
import Navbar from "../../Components/Navbar/Navbar";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";
import Footer from "../../Components/Footer/Footer";
import { Redirect } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  const filterData = (posts) => {
    console.log(posts);
    let resultAfterFilter = posts.filter(
      (post) =>
        post.category[0].toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
        post.title.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
        post.contentText.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
        post.author.firstName.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
        post.author.lastName.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );
    return resultAfterFilter;
  };

  // This function is called when user enters something in the search box and
  //it gets stored to filter state variable
  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };

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

  const addTofav = (id) => {
    axios
      .put("/api/user/" + id, {}, { headers: { Authorization: props.token } })
      .then((res) => {
        console.log(res.data);
      });
  };

  if (props.token === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="main">
      <Navbar handleChange={handleChange} name={props.name} />
      <div className="row">
        {/* 6-columns (one-half) */}
        <div className="col s2">
          <Menu token={props.token} />
        </div>
        {/* 6-columns (one-half) */}
        <div className="col s5">
          <ViewPosts
            token={props.token}
            posts={filterData(posts)}
            addTofav={addTofav}
          />
        </div>

        <div className="col s4">
          <UpcomingEvents />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
