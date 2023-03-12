import { Route, Routes } from 'react-router-dom'
import {Account, Conatct, ContactForm, EleDetails, LandingPage, LogIn, Navbar, ShopPage, SignUp, Terms} from "./Utiles/Utilities"
import './App.css'
import { useContext } from 'react'
import userContext from './Utiles/Context/AuthContext'

function App() {
  const {user}=useContext(userContext)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/terms" element={<Terms/>}/>   
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>   
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/contact" element={<Conatct/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/eledetails/:id" element={<EleDetails/>}/>
      </Routes>
     {user &&
        <ContactForm/>
      }
      
    </div>
  )
}

export default App
