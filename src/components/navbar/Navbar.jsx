import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "../../assets/loading.gif";
import {getSupplierInfo} from "./action";

const Menu = () => (
  <>
    <Link to="/supplier/myaddons">
      <p>My Addons</p>{" "}
    </Link>
    <Link to="/supplier/mysales">
      <p>My Sales</p>{" "}
    </Link>
    {localStorage.verify === null && (
      <Link to="/supplier/accounts">
        <p>Accounts Verification</p>{" "}
      </Link>
    )}
  </>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [is_connected, setConnected] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    // Update the document title using the browser API
    if (localStorage.getItem("addonOwner") !== null) {
      setConnected(true);
    } else {
      setConnected(false);
    }
    console.log("isconnected", is_connected);
  }, [is_connected]);
  const { user, supplier } = useSelector(state => state);

  useEffect(() => {
    console.log("redirecting", supplier)
    // Update the document title using the browser API
    if (supplier.supplierId) {
      setLoading(false);
      setConnected(true);

      if (localStorage.getItem("verified") === null) {
        return navigate("supplier/accounts");
      }
      navigate("supplier/dashboard");
    }
  }, [supplier]);
  const connectWallet = async () => {
    setLoading(true);
    if (!window.ethereum) alert("No crypto wallet found. Please install it.");
    // const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const walletId = await signer.getAddress();
    if (walletId) {
      //console.log(data, "variables");
      localStorage.setItem("addonOwner", walletId);
      dispatch(getSupplierInfo(walletId));
    }

  };
  const disconnectWallet = async () => {
    setLoading(true);
    localStorage.removeItem("addonOwner");
    setConnected(false);
    navigate("supplier/dashboard");
    setLoading(false);
  };
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <a href="/">
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
            <button
              type="button"
              className="secondary-btn"
              onClick={connectWallet}
            >
              {loading ? (
                <img src={LoadingIcon} style={{ width: "30px" }} alt="" />
              ) : (
                "Connect"
              )}
            </button>
          </>
        )}
        {is_connected && (
          <>
            <Link to="/supplier/create">
              <button type="button" className="primary-btn">
                Create
              </button>
            </Link>
            <button
              type="button"
              className="secondary-btn"
              onClick={disconnectWallet}
            >
              Disconnected
            </button>
          </>
        )}
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
              {user && (
                <>
                  <button type="button" className="secondary-btn">
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
