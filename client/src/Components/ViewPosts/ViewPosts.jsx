import "./ViewPosts.css";

const ViewPosts = (props) => {
  return (
    <>
      {props.posts.map(({ _id, category, title, imageURL, date, contentText, author }) => (
        <div className="row">
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{imageURL}</p>
              <p>{contentText}</p>
            </div>
            <div className="card-action">
              <button className="favoriteBTN" onClick = {()=>props.addTofav(_id)}>
              <i className="material-icons">star</i> Fav
              </button>
              <div className="Author">
                <h7>
                  Author: {author.firstName + " " + author.lastName}, Category:{" "}
                  {category}, Date: {date}
                </h7>
                <div />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewPosts;
