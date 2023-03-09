import { Route, Routes } from 'react-router-dom'
import {Account, Conatct, LandingPage, LogIn, Navbar, ShopPage, SignUp, Terms} from "./Utiles/Utilities"
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/contact" element={<Conatct/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>   
          <Route path="/account" element={<Account/>}/>
          <Route path="terms" element={<Terms/>}/>   
          <Route path="shop" element={<ShopPage/>}/>
      </Routes>
    </div>
  )
}

export default App
