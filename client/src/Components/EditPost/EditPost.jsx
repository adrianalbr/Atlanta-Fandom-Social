import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const EditPost = (props) => {
  
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [URL, setURL] = useState("");
    const [contentText, setContentText] = useState("");
    const [redirect, setRedirect] = useState(null);
  
    
   const {id} = useParams()

    useEffect(() => {
     console.log(id)
     if (id){
        axios
        .get(`/api/content/${id}`, {
            headers: {
                Authorization: props.token,
              },
        })
        .then((response) => {
            console.log(response.data);
            const {category, title, URL, contentText} = response.data; 
            setCategory(category)
            setTitle(title)
            setURL(URL)
            setContentText(contentText)

        }) 
        .catch((err) => {
            console.log(err)
        })
     }
    }, [id])

    const handleFormSubmit = (e, id) => {
      e.preventDefault();
      axios
      .put("/api/content/" + id, {
          headers: {
              Authorization: props.token,
            },
      }).then((response) => {
          console.log(response.data)
          setRedirect("/profile");
      }).catch((err) => {
          console.log(err);
      })
    };
    
    

    if (props.token === null) {
      return <Redirect to="/login" />;
    }
  
    if (redirect) {
      return <Redirect to={redirect} />;
    }

    
    return (
    <>
      <div>
        <Navbar />
        <div className="row">
          <form className="col s6" onSubmit={() => {handleFormSubmit(id)}}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Enter a Category"
                  id="category"
                  type="text"
                  name="category"
                  value={category}
                  required
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                <label htmlFor="category">Category</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Enter a title"
                  id="title"
                  type="text"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
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
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Enter your description"
                  id="contentText"
                  type="text"
                  name="contentText"
                  required
                  value={contentText}
                  onChange={(e) => {
                    setContentText(e.target.value);
                  }}
                />
                <label htmlFor="contentText">description</label>
              </div>
            </div>
            <button className="waves-effect waves-light btn">
             Update Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPost;
