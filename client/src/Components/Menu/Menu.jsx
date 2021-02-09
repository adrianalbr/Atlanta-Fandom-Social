import React from 'react';
import "./Menu.css";


const Menu = () => {
    return (
        <div>

            <div className="row">
                    <div className="buttons col s4">
                        <ul className= "list">
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






            // <div class="list-group">
            //     <a class="list-group-item" href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
            //     <a class="list-group-item" href="#"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; Library</a>
            //     <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Applications</a>
            //     <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp; Settings</a>
            // </div>