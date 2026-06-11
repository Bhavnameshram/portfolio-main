import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Experienace from "./section/Experienace";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";
import Footer from './section/Footer';
import ParticlesBackground from "./components/ParticlesBackground";

 



 export default function App(){
  return(
    <div className="relative gradient text-white">
      <ParticlesBackground/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Experienace/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )

 }


