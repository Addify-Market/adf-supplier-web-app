import React, {useEffect} from "react";
import "./item.css";
import {useDispatch, useSelector } from "react-redux";
import { getAddonInfo } from "./actions";
const Item = () => {

  const url = window.location.href;
  const lastSegment = url.split("/").pop();
  const addonsData = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    // getAddonData()
    // props.addons.forEach(addon=>{
     
    //   if(addon.addonId===lastSegment){
    //     setAddonsData(addon);
    //   }
    //   // return true;
    // })
    dispatch(getAddonInfo(lastSegment));
  },[dispatch,lastSegment])
 
  
  return (
    <div className="item section__padding">
      <div className="item-image">
        <img src={addonsData.supplierAddon.logo} width="300px" height="300px" alt="item" />
        {addonsData.supplierAddon.linkedNFT.length !==0 &&
        <div className="item-content-detail">
          <p>
            Linked with NFT Contract Address
            
          </p>
          <p>
            
              <>
              <img src={addonsData.supplierAddon.linkedNFT.image} width="100px" height="100px" alt="item" /> 
              <img src={addonsData.supplierAddon.linkedNFT.image} width="100px" height="100px" alt="item" />
              </>
          
            
          </p>

        </div>
          }
      </div>
      <div className="item-content">
        <div className="item-content-title">
          <h1>{addonsData.supplierAddon.title}</h1>
          <p>
           Price <span>{addonsData.supplierAddon.price} ETH</span> ‧ {addonsData.supplierAddon.used} Used and {addonsData.supplierAddon.booked} booked of {addonsData.supplierAddon.quantity-(addonsData.supplierAddon.used+addonsData.supplierAddon.booked)} available
          </p>
          <p>Total Addon {addonsData.supplierAddon.quantity}</p>
        </div>
        {/* <div className="item-content-creator">
          <div>
            <p>Creator ID</p>
          </div>
          <div>
            <img src={creator} alt="creator" />
            <p>{}</p>
          </div>
        </div> */}
        <div className="item-content-detail">
          <p>
            {addonsData.supplierAddon.description}
          </p>
        </div>
        <div className="item-content-buy">
        
        </div>
      </div>
    </div>
  );
};

export default Item;
