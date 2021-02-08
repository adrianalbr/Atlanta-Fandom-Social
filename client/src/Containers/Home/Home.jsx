import React from "react";
// import { Col, Row, Container } from "../../Components/Grid/Grid"
import Cardpost from "../../Components/Cardpost/Cardpost";
import Menu from "../../Components/Menu/Menu";
import ViewPosts from "../../Components/ViewPosts/ViewPosts";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
    return (

        <div className="row">
            {/* This div is 12-columns wide on all screen sizes */}
            <div className="col m12">
            <Navbar/>
            </div>
            {/* 6-columns (one-half) */}
            <div className="col s4">
            <Menu/>
            </div>
            {/* 6-columns (one-half) */}
            <div className="col s5">
            <Cardpost/>
            <ViewPosts/>
            </div>
        </div>
        
        
    );
};

export default Home;