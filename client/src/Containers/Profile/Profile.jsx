import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/Menu/Menu";
import Footer from "../../Components/Footer/Footer";
import { Redirect } from "react-router-dom";
import ViewMyPosts from "../../Components/ViewPosts/ViewMyPosts.jsx";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";
import "./Profile.css";

const Profile = (props) => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  // This function is called when user enters something in the search box and
  //it gets stored to filter state variable
  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };
  // write a function mentioning where all you want to set the filter
  const filterData = (posts) => {
    console.log(posts);
    let resultAfterFilter = posts.filter(
      (post) =>
        post.category[0].toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
        post.title.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
        post.contentText.toLowerCase().indexOf(filter.toLowerCase()) > -1
    );
    return resultAfterFilter;
  };

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
    <div className="main">
      <Navbar handleChange={handleChange} name={props.name}/>
      <div className="row">
        <div className="col s2">
          <Menu token={props.token} />
        </div>
        <div className="col s5">
          <ViewMyPosts
            token={props.token}
            posts={filterData(posts)}
            handleDelete={handleDelete}
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

export default Profile;
