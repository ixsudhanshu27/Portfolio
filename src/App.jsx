import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Contact from './Contacts.jsx'
import Footer from './footer.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
