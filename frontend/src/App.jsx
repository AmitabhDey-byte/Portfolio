import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

import LightPillar from "./component/LightPillar";
import Navbar from "./Pages/Navbar";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
       <LightPillar />
        <Navbar />
        <main className="app-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
         
        </main>
          <Footer />
      </div>
     
    </BrowserRouter>
  );
}
