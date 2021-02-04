import React from 'react';

const Post = () => {
    return (
        <div>

            <div className="row">
                <form className="col s6">
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                    <label for="first_name">UserName</label>
                    </div>
                    <div className="input-field col s6">
                    <input id="last_name" type="text" class="validate"/>
                    <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <input posting="Enter your post here" type="text" class="validate"/>
                    {/* <label for="disabled">Disabled</label> */}
                    </div>
                </div>
                
                <div class="row">
                    <div class="input-field col s6">
                    <input id="email" type="email" class="validate"/>
                    <label for="email">Email</label>
                    </div>
                </div>
                </form>
            </div>
            
        </div>
    );
};

export default Post;