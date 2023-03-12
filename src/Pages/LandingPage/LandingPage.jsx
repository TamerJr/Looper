import React, { useContext } from 'react'
import "./LandingPage.css"
import ValueSection from '../../Components/valueSection/ValueSection'
import ShopCard from '../../Components/ShopCard/ShopCard'
import { Data } from '../../Utiles/Products'
import { Clients } from '../../Utiles/Utilities'
const LandingPage = () => {
  return (
    <section>
      <ValueSection/>
      <h1 style={{"color":"white" , "textAlign":"center"}}>Products</h1>
      <ShopCard Data={Data.slice(0,3)}/>
      <Clients/>
    </section>

  )
}

export default LandingPage