import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
        <div>

            <div className="row">
                    <div className="buttons col s4">
                        <ul>
                            <a className="waves-effect waves-light btn">Home</a>
                        </ul>
                        <ul>
                            <a className="waves-effect waves-light btn">Saved Posts</a>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Menu;
