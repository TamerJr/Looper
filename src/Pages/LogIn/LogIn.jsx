import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../Utiles/Context/AuthContext";

import "./LogIn.css";
const LogIn = () => {
  const {handleLogIn ,setEmail,setPassword,email,password}=useContext(userContext) 

  return (
    <section className="LogIForm">
      <form className="LogIn" onSubmit={handleLogIn}>
        <legend>Log In</legend>
        <p className="inputs">
          <label htmlFor="email">Email</label>
          <input id="email" value={email} type="email" placeholder="E-mail Address" onChange={(e)=>setEmail(e.target.value)} required/>
        </p>
        <p className="inputs">
          <label htmlFor="password">Password</label>
          <input id="password" value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
        </p>
        <p>
          Want To Create An Account
          <span>
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
        <button>Log In</button>
      </form>
    </section>
  );
};

export default LogIn;
