// import React from "react";
// import { useState } from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Header from "./components/Header";

function App() {


  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />        
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
