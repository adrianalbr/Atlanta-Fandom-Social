import React from "react";
import './Cardpost.css'

const Cardpost = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title">Dr Strange</span>
              <p>
              Dormammu, I've Come To Bargain!!
              </p>
            </div>
            <div className="card-action">
              <a href="/">Save</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;
