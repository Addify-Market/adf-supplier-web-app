import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Menu = () => (
  <>
    <Link to="/">
      <p>Explore</p>{" "}
    </Link>
    <p>My Items</p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [user, setUser] = useState(false);

  // const handleLogout = () => {
  //   setUser(false);
  // };
  // const handleLogin = () => {
  //   setUser(true);
  // };

  const { user } = useSelector(state => state);
 

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <a href='/'>
            <h1>Adify</h1>
          </a>
        </div>
      </div>
      <div className="navbar-sign">
        {user && (
          <>
            
            <button type="button" className="secondary-btn" >
              Connect
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
