import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ViewPosts.css";
const ViewPosts = (props) => {
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
                <p className="postInfo">
                  Posted by: {author.firstName + " " + author.lastName}
                </p>
                <br />
                <img className="cardImage" src={imageURL} />
                <p>{contentText}</p>
              </div>
              <div className="card-action">
                <FontAwesomeIcon
                  className="heartIcon"
                  onClick={() => props.addTofav(_id)}
                  icon={faHeart}
                  style={{ color: "red", height: "25px", width: "25px" }}
                >
                  Fav
                </FontAwesomeIcon>
                <div className="Author">
                  <p className="postInfo">
                    <a href={url}>{url.substring(0, 66)}</a>
                    <br />
                    {category}
                    <br />
                    {date.substring(0, 10)}
                  </p>
                  <div />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ViewPosts;
