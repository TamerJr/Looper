import React from 'react'
import ShopCard from '../../Components/ShopCard/ShopCard'
import {Data} from"../../Utiles/Products"
const ShopPage = () => {
  return (
    <section>
      <ShopCard Data={Data}/>
    </section>
  )
}

export default ShopPage