import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cardpost.css";

const Cardpost = () => {
  return (
    <div>
      <div className="row">
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title">Dr Strange</span>
            <p>Dormammu, I've Come To Bargain!!!</p>
          </div>
          {/* removed word "image" in alt as per warning */}
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="this is car" />
          <div className="card-action">
            <button className="favoriteBTN">
              <i className="fa fa-heart"></i> Fav
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title">The Ancient One</span>
            <p>Have you seen that before in a gift shop?</p>
          </div>
          <div className="card-action">
            <button className="favoriteBTN">
              <i className="fa fa-heart"></i> Fav
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title">Kaecilius</span>
            <p>Mister Doctor...</p>
          </div>
          <div className="card-action">
            <button className="favoriteBTN">
              <i className="fa fa-heart"></i> Fav
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;
