
import Navbar from "./components/Navbar";
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Experienace from "./section/Experience";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";
import Footer from './section/Footer';
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import OverlayMenu from "./components/OverlayMenu";
import IntroAnimation from "./components/IntroAnimation";
import React from "react";




export default function App() {
  const [introDone, setIntroDone] = React.useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className=" relative gradient text-white">



          <CustomCursor />

          {/* <ParticlesBackground /> */}
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experienace />
          <Testimonials />
          <Contact />
          <Footer />

        </div>
      )}
    </>
  )
}


