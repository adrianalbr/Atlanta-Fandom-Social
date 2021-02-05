import React from 'react';
import Cardpost from '../../Components/Cardpost/Cardpost';
import React from "react";
import Cardpost from "../../Components/Cardpost/Cardpost";
import Menu from "../../Components/Menu/Menu";
import ViewPosts from "../../Components/ViewPosts/ViewPosts";

const Home = () => {
    return (
        <div>
            <Menu/>
            <Cardpost/>
            <ViewPosts/>
        </div>
    );
};

export default Home;