import React from "react";

const Post = () => {
  return (
    <div>
      <div className="row">
        <form className="col s6" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Enter a Category"
                id="category"
                type="text"
                name="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <label htmlFor="category">Category</label>
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Enter a type"
                id="type"
                type="text"
                name="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
              <label htmlFor="type">Type</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Enter a title"
                id="title"
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="Enter a URL"
                id="URL"
                type="text"
                name="URL"
                value={URL}
                onChange={(e) => {
                  setURL(e.target.value);
                }}
              />
              <label htmlFor="URL">URL</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="Enter your description"
                id="contentText"
                type="text"
                name="contentText"
                value={contentText}
                onChange={(e) => {
                  setContentText(e.target.value);
                }}
              />
              <label htmlFor="contentText">description</label>
            </div>
          </div>
          <button className="waves-effect waves-light btn">
            Create a Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
