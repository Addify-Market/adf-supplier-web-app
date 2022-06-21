import React from "react";
import "./mysales.css";
import { AiFillHeart } from "react-icons/ai";
import bids1 from "../../assets/bids1.png";

import { Link } from "react-router-dom";
const MySales = ({ title }) => {
  return (
    <div className="bids section__padding">
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids1} width="100px" height="100px" alt="" />
                <Link to={`/addon/1`}>
                  <p className="bids-title">Abstact Smoke Red</p>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>
                  1.25 <span>ETH</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 92
                </p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      <div className="load-more">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default MySales;
