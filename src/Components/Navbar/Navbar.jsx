import React from 'react'
import {Link} from "react-router-dom"
import {Looper as Logo} from "../../Assets/Looper.png"
const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt='Logo' title='Looper'/>
    </nav>
  )
}

export default Navbar