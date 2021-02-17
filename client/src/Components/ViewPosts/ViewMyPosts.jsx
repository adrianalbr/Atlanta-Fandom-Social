import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ViewPosts.css";
import { Link } from "react-router-dom";
const ViewMyPosts = (props) => {
  return (
    // .substring(0, 5) could be useful later
    <>
      {props.posts.map(
        (
          { _id, category, title, imageURL, url, date, contentText, author },
          i
        ) => (
          <div className="row" key={i}>
            <div className="card">
              <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <img
                  className="cardImage"
                  src={imageURL}
                  alt="Image from Card"
                />
                <p>{contentText}</p>
              </div>
              <div className="card-action">
                <button
                  className="deleteBTN"
                  onClick={() => {
                   props.handleDelete(_id);
                  }}
                >
                  <i class="material-icons">delete</i>
                </button>

                <Link to={`/post/${_id}`}>
                  <button className="editBTN">
                  <i class="material-icons editAndDelete">create</i>
                  </button>
                </Link>
                  <br/>
                <a href={url}>{url.substring(0, 66)}</a>
                <p id="categoryText">
                  {category} <br />
                  {date.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ViewMyPosts;
