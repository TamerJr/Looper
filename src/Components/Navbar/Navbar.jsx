import React,{useContext} from "react";
import { Link } from "react-router-dom";
import Looper from "../../Assets/Looper.png";
import userContext from "../../Utiles/Context/AuthContext";
import "./Navbar.css";
const Navbar = () => {
  const {handleLogOut,user}=useContext(userContext)
  return (
    <nav>
      <Link to="/">
      <img src={Looper} alt="Logo" title="Looper" />
      </Link>
      {/* nav menu */}
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
         {user&&
          <li>
           <Link to="/account">Account</Link>
          </li>
         }
      </ul>
      {/* Auth section */}
      <ul>
        {!user?
          <li>
            <Link to="/login">Log In</Link>
          </li>:
          <li>
            <button onClick={()=>handleLogOut()}>Log Out</button>
          </li>
        }
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
