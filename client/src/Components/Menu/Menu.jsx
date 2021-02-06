import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
        <div>

            <div className="row">
                    <div className="buttons col s4">
                        <ul>
                            <a href = "/home" className="waves-effect waves-light btn">Home</a>
                        </ul>
                        <ul>
                            <a href = "/SavedPosts" className="waves-effect waves-light btn">Saved Posts</a>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Menu;
