import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Projectcards from './Projectcards.jsx'
import Projectdata from './Projectdata.jsx'
import Home from './Home.jsx'
import Contact from './Contacts.jsx'
import Footer from './footer.jsx'
import './App.css'

function App() {
  const DataArray = Projectdata.data.projects
   
  const ProjectCards = DataArray.map(projects => <Projectcards key={projects.id} name = {projects.name} about = {projects.about} />)

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
