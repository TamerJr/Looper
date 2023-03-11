import React from 'react'
import ShopCard from '../../Components/ShopCard/ShopCard'
import { Data } from '../../Utiles/Products'
const LandingPage = () => {
  return (
    <section>
      
      <ShopCard Data={Data.slice(0,3)}/></section>
  )
}

export default LandingPage