import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Looper from "../../Assets/Looper.png";
import userContext from "../../Utiles/Context/AuthContext";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const { handleLogOut, user } = useContext(userContext);
  const [toggled,setToggled] =useState(false)
  return (
    <nav>
      <Link to="/">
        <img src={Looper} alt="Logo" title="Looper" />
      </Link>
      {/* nav menu */}
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/terms">Terms</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        {user && (
          <li>
            <Link to="/account">Account</Link>
          </li>
        )}
      </ul>
      {/* Auth section */}
      <ul className="navigation AccountButton">
        {!user ? (
          <li>
            <Link to="/login">Log In</Link>
          </li>
        ) : (
          <li>
            <button onClick={() => handleLogOut()}>Log Out</button>
          </li>
        )}
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <section className="ToggledMenu">
        <RxHamburgerMenu size={25} className="Hamburger" onClick={()=>setToggled(!toggled)}/>
        <div className={toggled?"toggled toggleClick" :"toggled"}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            {user && (
              <li>
                <Link to="/account">Account</Link>
              </li>
            )}
          </ul>
          <div>
            <ul className="toggled-menu">
              {!user ? (
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              ) : (
                <li>
                  <button onClick={() => handleLogOut()} className="logOutMenu">Log Out</button>
                </li>
              )}
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
