import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ViewPosts = (props) => {
  return (
    <>
      {props.posts.map(
        ({ _id, category, title, imageURL, date, contentText, author }, i) => (
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
                    Category: {category}, Date: {date}
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
