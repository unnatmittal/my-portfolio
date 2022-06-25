import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Proj } from "./components/Projects/Proj";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <div id="about">
        <About />  
      </div>
      <div id="projects">
        <Proj />  
      </div>
      <div id="contact">
        <Contact />  
      </div>
      <Footer />

    </div>
  );
}

export default App;
