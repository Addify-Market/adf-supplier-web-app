import React, {useEffect, useState} from "react";
import "./item.css";
import creator from "../../assets/seller2.png";
import { useSelector } from "react-redux";
const Item = () => {
  const [addonsData,setAddonsData] = useState({})
  const url = window.location.href;
  const lastSegment = url.split("/").pop();
  const props = useSelector(state => state);
  
  useEffect(()=>{
    // getAddonData()
    props.addons.forEach(addon=>{
     
      if(addon.addonId===lastSegment){
        setAddonsData(addon);
      }
      // return true;
    })
  },[props.addons, lastSegment])
  
  
  return (
    <div className="item section__padding">
      {console.log("addonid",addonsData)}
      <div className="item-image">
        <img src={addonsData.logo} alt="item" />
      </div>
      <div className="item-content">
        <div className="item-content-title">
          <h1>{addonsData.title}</h1>
          <p>
           Price <span>{addonsData.price} ETH</span> ‧ 20 of 25 available
          </p>
        </div>
        <div className="item-content-creator">
          <div>
            <p>Creator ID</p>
          </div>
          <div>
            <img src={creator} alt="creator" />
            <p>{addonsData.distributedBy}</p>
          </div>
        </div>
        <div className="item-content-detail">
          <p>
            {addonsData.description}
          </p>
        </div>
        <div className="item-content-buy">
          {/* <button className="primary-btn">Link Addon</button> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
