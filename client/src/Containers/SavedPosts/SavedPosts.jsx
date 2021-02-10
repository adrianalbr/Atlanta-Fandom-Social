import React from 'react';
import Cardpost from '../../Components/Cardpost/Cardpost';
import Navbar from "../../Components/Navbar/Navbar";
import { Redirect } from "react-router-dom";

const SavedPosts = (props) => {
    if(props.token === null){
        return <Redirect to ="/login"/>
    }
    return (
        <div>
            <Navbar/>
            <Cardpost/>
        </div>
    );
};

export default SavedPosts;