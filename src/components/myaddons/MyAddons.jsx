import React,{useState, useEffect} from "react";
import "./myaddons.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyaddons } from "./action";
import loader from "../../assets/loading2.gif";
const MyAddons = ({ title }) => {
  const props = useSelector(state => state);
  const [loading,setloading] = useState(!props.addons.length);
  console.log(props)
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!props.addons.length){
      dispatch(getMyaddons(props.supplier.supplierId));
      return;
    }
    setloading(false)
  },[props.addons])
  
  return (
    <div className="bids section__padding">
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          {!loading && props.addons.map(addon=>
              <div className="card-column" key={addon.addonId}>
              <div className="bids-card">
                <div className="bids-card-top">
                  <img src={addon.logo}  alt="" width="100px" height="100px"/>
                  <Link to={`/item/${addon.addonId}`}>
                    <p className="bids-title">{addon.title}</p>
                  </Link>
                </div>
                <div className="bids-card-bottom">
                  <p>
                    {addon.price} <span>ETH</span>
                  </p>
                 
                </div>
              </div>
            </div>
          )}
          {
            loading && <>
            <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
            <img
              src={loader}
              alt="vybuhijk"
              style={{ width: "50%", margin: "auto" }}
            />
            <br />
            <b style={{ fontSize: "20pt",color: "white" }}>
              {"Please wait..."}
            </b>
          </div>
          </>
          }
          
          
        </div>
      </div>
      <div className="load-more">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default MyAddons;
