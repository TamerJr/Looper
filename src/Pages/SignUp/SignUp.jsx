import React , {useContext} from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import userContext from '../../Utiles/Context/AuthContext'
const SignUp = () => {
  const {handleSignUp ,setEmail,setPassword,email,password}=useContext(userContext) 


  return (
    <section className='SignUpFrom' onSubmit={handleSignUp}>
    <form className="SignUp" >
      <legend>Sign Up</legend>
      <p className="inputs">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="E-mail Address" value={email} onChange={e=>setEmail(e.target.value)} required/>
      </p>
      <p className="inputs">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
      </p>
      <p>
        Already member 
        <span>
          <Link to="/login">Log In</Link>
        </span>
      </p>
      <button>Sign Up</button>
    </form>
  </section>
  )
}

export default SignUp