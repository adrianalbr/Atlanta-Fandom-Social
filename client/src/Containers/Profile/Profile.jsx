import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css"

const Profile = (props) => {
        const [posts, setPosts] = useState([]);
    
        useEffect(() => {
        // api call to get all posts of that user
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
        }, []);
    
        return (
        <div>
            {posts.map(({ category, title, date, contentText }, index) => (
            <div className="row" key={index}>
                <div className="card">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{contentText}</p>
                </div>
                <div className="card-action">
                    <p>
                    Category: {category}, Date: {date}
                    </p>
                </div>
                </div>
            </div>
            ))}
        </div>
        );
    };

export default Profile;
