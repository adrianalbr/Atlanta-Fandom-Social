import React from "react";
import { Col, Row, Container } from "../../Components/Grid/Grid"
import Cardpost from "../../Components/Cardpost/Cardpost";
import Menu from "../../Components/Menu/Menu";
import ViewPosts from "../../Components/ViewPosts/ViewPosts";
import Navbar from "../../Components/Navbar/Navbar";
import { Redirect } from "react-router-dom";

const Home = (props) => {
    if(props.token === null){
        return <Redirect to ="/login"/>
    }
    return (

        <div class="row">
            <div class="col s12">This div is 12-columns wide on all screen sizes
            <Navbar/>
            </div>
            <div class="col s4">6-columns (one-half)
            <Menu/>
            </div>
            <div class="col s6">6-columns (one-half)
            <Cardpost/>
            <ViewPosts token = {props.token}/>
            </div>
        </div>
        
        
    );
};

export default Home;