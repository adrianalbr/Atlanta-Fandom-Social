import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
        <div>
            <div className="row">
            <div className="col-sm-3">
            <a class="waves-effect waves-light btn">Home</a>
            </div>
            <a className="waves-effect waves-light btn">Saved Posts</a>
            </div>
        </div>
    );
};

export default Menu;