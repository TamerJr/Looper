import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <section  className='Contact-Us'>
      <h1>Current Client Support</h1>
      <div className='Client-Support-Container'>
        <div className='Client-Support'>
          <h3>Cassandra Bullock</h3>
          <img src="https://images.pexels.com/photos/1963075/pexels-photo-1963075.jpeg?auto=compress&cs=tinysrgb&w=400" alt="client support img"/>
          <button>
            Start A Conversation
          </button>
        </div>
        <div>
        <h3>James Labron</h3>
          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="client support img"/>
          <button>
            Start A Conversation
          </button>
        </div>
        <div>
        <h3>Abraham milkoln</h3>
          <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400" alt="client support"/>
          <button>
            Start A Conversation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact