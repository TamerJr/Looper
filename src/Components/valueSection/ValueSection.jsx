import React from 'react'
import "./ValueSection.css"
import firstimg from "../../Assets/1.png"
import secimg from "../../Assets/2.png"
import thirdimg from "../../Assets/3.png"

const ValueSection = () => {
  
  return (

    <main className='ValueSection'>
      <div className='Disc-info'>
        <div className='TextDisc'>
          <h1>
            Who We Are
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam quisquam aperiam explicabo molestias consequatur. Vitae, quos! Eligendi saepe, vel ut illo fugiat et quo consequatur voluptatibus veniam dolores similique.
          </p>
        </div>
        <img src="data:image/jpeg;base64,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" alt="Cloud Computing" />
      </div>
      <div className='ClientContainer'>
        <h1>
          Our Client 
        </h1>
        <ul className='Clients'>
          <li><img src={firstimg} alt="img" /></li>
          <li><img src={secimg} alt="img" /></li>
          <li><img src={thirdimg} alt="img" /></li>
        </ul>
      </div>
    </main>

  )
}

export default ValueSection