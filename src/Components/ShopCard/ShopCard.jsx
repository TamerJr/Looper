import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./ShopCard.css"
import dbContext from '../../Utiles/Context/DBContect'
const ShopCard = ({Data}) => {
  const {addData}=useContext(dbContext)
  return (
    
    <section className='Shop-Card' >
      {Data?.map((ele,ndx)=>
        <article className='Elem' key={ndx}>
          <figure className='prodImg'>
          {! ele.Amount &&<small onClick={()=>addData(ele)}>Follow</small>} 
            <img src={ele.img} alt={ele.title} title={ele.title}/>
            <figcaption>
              {ele.title}
            </figcaption>
          </figure>
          <section className='Infos'>
            <h3>
            {! ele.Amount ? "Sold Out":` Amount ${ele.Amount} `}
            </h3>
            <p>
            {ele.discription.substring(0,100)}...
            </p>
            <section className='buttons'>
              <button>
                <Link to={`/eledetails/${ndx}`}>
                    Details 
                </Link>
              </button>
              <button >
                    Buy 

              </button>
            </section>
          </section>
        </article>
          )    }
    </section>
  )
}

export default ShopCard