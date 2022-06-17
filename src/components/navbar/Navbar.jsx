import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import axios from "axios";
import {data} from "../../config";
import { useNavigate } from 'react-router-dom';
const Menu = () => (
  <>
    <Link to="/supplier/myaddons">
      <p>My Addons</p>{" "}
    </Link>
    <p>My Items</p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [is_connected, setConnected] = useState(false);
  // const [user, setUser] = useState(false);

  // const handleLogout = () => {
  //   setUser(false);
  // };
  // const handleLogin = () => {
  //   setUser(true);
  // };


useEffect(() => {
  // Update the document title using the browser API
  if(localStorage.getItem('addonOwner')!== null){
    setConnected(true);
  }else{
    setConnected(false);
  }
  console.log("isconnected",is_connected)
},[is_connected]);

  const { user } = useSelector(state => state);
  let navigate = useNavigate();
  const connectAddonOwner = async () => {
    if (!window.ethereum)
      alert("No crypto wallet found. Please install it.");
    // const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const walletId = await signer.getAddress();
    console.log({signer});
    console.log(walletId);
    if(walletId){
      //console.log(data, "variables");
      localStorage.setItem("addonOwner",walletId);
      const response = await axios
        .get(`${data.serviceUrl}/supplier/${walletId}`)
        .then(res => res.data)
        .catch(e => {
          console.log("\x1b[31mNot Found");
          return null;
        });
      console.log("response",response);
      if(response){
        setConnected(true);
        navigate('supplier/dashboard');
      }else{
        navigate('supplier/register');
      }
      console.log(response);
    }
  }
  const disconnectAddonOwner =  async () => {
    localStorage.removeItem('addonOwner');
    setConnected(false);
    navigate('supplier/dashboard');
  }
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <a href='/'>
            <h1>Adify</h1>
          </a>
        </div>
        {is_connected && (
          <div className="navbar-links_container">
          <Menu />
          </div>
        )}
      </div>
      <div className="navbar-sign">
        {!is_connected && (
          <>
            
            <button type="button" className="secondary-btn" onClick={connectAddonOwner}>
              Connect
            </button>
          </>
        )}
        {is_connected && (
          <>
           <Link to="/create">
              <button type="button" className="primary-btn" >
                Create
              </button>
            </Link>
            <button type="button" className="secondary-btn" onClick={disconnectAddonOwner}>
              Discconnected
            </button>
          </>
        )}
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
              {user && (
                <>
                  <button type="button" className="secondary-btn" >
                    Connect
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
