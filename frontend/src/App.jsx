import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer"
import Landing from "./Pages/Landing"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"
import Background from './component/Background'
import Navbar from './Pages/Navbar'
import TargetCursor from './component/TargetCursor';
import './App.css'

export default function App() {
  
  return(<>
      <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
    </div>
  <BrowserRouter>
  <Background />
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