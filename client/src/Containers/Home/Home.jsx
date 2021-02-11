import React from "react";
// import { Col, Row, Container } from "../../Components/Grid/Grid"
import Cardpost from "../../Components/Cardpost/Cardpost";
import Menu from "../../Components/Menu/Menu";
import ViewPosts from "../../Components/ViewPosts/ViewPosts";
import Navbar from "../../Components/Navbar/Navbar";
import { Redirect } from "react-router-dom";

const Home = (props) => {
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
          <Cardpost />
          <ViewPosts token={props.token} />
        </div>
      </div>
    </div>
  );
};

export default Home;
