import React from 'react'
import { useParams } from 'react-router-dom'
import {Data} from "../../Utiles/Products"
import "./EleDetails.css"
const EleDetails  = () => {
    const {id}=useParams()
    const ele=Data[id]
    console.log(ele)
  return (
    <section className='EleDetails'>
      
      <section className='DiscriptionBox'>
        <h1>{ele?.title}</h1>
        <div className='DiscriptionBox'>
          <h2>
            Discription 
          </h2>
          <p>
            {ele?.discription}
          </p>
        </div>
        <div >
          <h2>
           Current Amount 
          </h2>
          <h4 >
            {ele?.Amount}
          </h4>
        </div>
      </section>
      <figure className='EleFigure'>
        <img className='ELeImg' src={ele?.img} alt={ele?.title} title={ele?.title}/>
      </figure>
    </section>
  )
}

export default EleDetails 