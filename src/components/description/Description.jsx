import React from 'react'
import './description.css'
// import { useSelector } from "react-redux";
import bids1 from '../../assets/bids1.png'
import bids2 from '../../assets/bids2.png'
import bids3 from '../../assets/bids3.png'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Buttons from "./components/Button";
import useHook from "../../hooks";
import { useNavigate } from 'react-router-dom';
const Description = ({title}) => {
 // const { user } = useSelector(state => state);

 let navigate = useNavigate();
 const {toggleUser} = useHook();
 const changeUserStatus = (e) => {
   e.preventDefault()
   console.log("hits");
   toggleUser(true, 'addonOwner', false);
   navigate('/supplier/dashboard');
 }

  return (
    <div className='description-bids section__padding'>
    <div className="description-bids-container">
      <div className="description-bids-container-text">
        <h1>{title}</h1>
      </div>
      <div className="description-container-card">
        <div className="description-card-columns" >
          <div className="description-bids-card">
            <div className="description-bids-card-top">
              <img src={bids1} alt="" />
            <a href="/" style={{display:"flex", justifyContent: "space-between"}}>
            <p className="description-bids-title">Supplier</p>
            <p><Button variant="contained" style={{background:'#4AB3EF', color:"#ffffff", fontWeight:"bold"}} onClick={changeUserStatus}>Supplier</Button></p>
            {/* <p><Button color="" title="Connect" role="supplier" onclick= {changeUserStatus}/></p> */}
            </a>
            </div>
            <div className="description-bids-card-bottom">
            <p></p>
             
            </div>
          </div>
        </div>
        <div className="description-card-columns" >
          <div className="description-bids-card">
            <div className="description-bids-card-top">
              <img src={bids2} alt="" />
              <a href={`https://addify-market.github.io/adf-supplier-web-app/`} style={{display:"flex", justifyContent: "space-between"}}>
            <p className="description-bids-title">Distributor</p>
            <p><Buttons color="#4AEFB0" title="Connect" role="distributor"  /></p>
            </a>
            </div>
            <div className="description-bids-card-bottom">
            <p></p>
            </div>
          </div>
        </div>
        <div className="description-card-columns" >
          <div className="description-bids-card">
            <div className="description-bids-card-top">
              <img src={bids3} alt="" />
            <Link to={`/post/123`} style={{display:"flex", justifyContent: "space-between"}}>
                <p className="description-bids-title">User</p>
                <p><Buttons color="#C74FF0" title="Connect" role="user"/></p>
            </Link>
            </div>
            <div className="description-bids-card-bottom">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}

export default Description;
