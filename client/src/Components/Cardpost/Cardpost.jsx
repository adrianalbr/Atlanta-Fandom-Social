import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <div className="card-action">
            <button>
              <i class="fa fa-heart"></i> Fav
            </button>""
            <button>
              <i class="fa fa-pencil"></i> Update
            </button>
            <button>
              <i class="fa fa-trash-o"></i> Delete
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
            <button>
              <i class="fa fa-heart"></i> Fav
            </button>
            <button>
              <i class="fa fa-pencil"></i> Update
            </button>
            <button>
              <i class="fa fa-trash-o"></i> Delete
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
            <button>
              <i class="fa fa-heart"></i> Fav
            </button>
            <button>
              <i class="fa fa-pencil"></i> Update
            </button>
            <button>
              <i class="fa fa-trash-o"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;
