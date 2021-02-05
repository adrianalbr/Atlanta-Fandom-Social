
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("/api/content").then((response) => {
            console.log(response.data);
            setPosts(response.data);
          });
    })
    return (
        <div>
            
        </div>
    );
};

export default ViewPosts;