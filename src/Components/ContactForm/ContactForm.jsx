import React from 'react'
import "./ContactForm.css"
import {FaGithubAlt} from "react-icons/fa"
import {FiLinkedin} from "react-icons/fi"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
const ContactForm = () => {
  return (
    <footer>
      <section>
        <h3>Info :</h3>
        <ul className='footer-info'>
          <li><p>Working : </p><p> 7AM to 0AM </p></li>
          <li><p>Address : </p><p> City 13 Street</p></li>
          <li><p>Phone : </p><p> +2001234567890</p></li>
        </ul>
        <ul className='Social-Media'>
          <li ><FaGithubAlt size={25}/></li>
          <li ><FiLinkedin size={25}/></li>
          <li ><BsFacebook size={25}/></li>
          <li ><AiOutlineTwitter size={25}/></li>
        </ul>
      </section>
      <form>
        <p>
          <label htmlFor="Name">Name</label>
          <input id="Name" placeholder='Name' title='Name'></input>
        </p>
        <p>
        <label htmlFor="Email">Email</label>
          <input id="Email" placeholder='Email' title='Email'></input>
        </p>
        <p>
          <label id="MessageType">Select Message Type</label>
          <select name="MessageType">
            <option value="">---</option>
            <option value="Work">Work</option>
            <option value="Complain">Complain</option>
            <option value="Asking">Asking</option>
          </select>
        </p>
        <p>
          <label htmlFor="Message">Message</label>
          <textarea id="Message" placeholder='Message' title='Message'></textarea>
        </p>
      </form>
    </footer>
  )
}

export default ContactForm