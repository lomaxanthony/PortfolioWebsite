import React from "react";
import { useState } from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import NavBar from "./components/NavBar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <div className="App">
        <NavBar />
        <div>
          <button onClick={toggleDarkMode} className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded">
            Toggle Dark Mode
          </button>
        </div>
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
