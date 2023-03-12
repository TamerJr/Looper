import React, { useContext, useEffect, useState } from 'react'
import ShopCard from '../../Components/ShopCard/ShopCard'

import dbContext from '../../Utiles/Context/DBContect'
const Account = () => {
  const {list}=useContext(dbContext)

  return (
    <>
    <section>
      <ShopCard Data={list}/>
    </section>

    </>
  )
}

export default Account