import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ViewPosts.css";
const ViewPosts = (props) => {
  return (

    // .substring(0, 5) could be useful later
    <>
      {props.posts.map(
        ({ _id, category, title, imageURL, url, date, contentText, author }, i) => (
          <div className="row" key={i}>
            <div className="card">
              <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <img src={imageURL}/>
                <p>{contentText}</p>

              </div>
              <div className="card-action">
                <FontAwesomeIcon
                  onClick={() => props.addTofav(_id)}
                  icon={faHeart}
                  style={{ color: "red", height: "25px", width: "25px" }}
                >
                  Fav
                </FontAwesomeIcon>
                <div className="Author">
                  <h6>
                    Author: {author.firstName + " " + author.lastName},
                    Category: {category}, Date: {date.substring(0, 10)}
                    <a href={url}>{url}</a>
                  </h6>
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
