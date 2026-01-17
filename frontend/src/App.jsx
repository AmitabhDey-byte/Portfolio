import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer"
import Landing from "./Pages/Landing"
import Navbar from "./Pages/Navbar"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"

import './App.css'

export default function App() {
  
  return(<>
  <BrowserRouter>
<Navbar />
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/skills' element={<Skills />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/footer' element={<Footer />}/>  
    </Routes>
  </BrowserRouter>
  </>) 
}