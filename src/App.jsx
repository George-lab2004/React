import React, { useState } from "react";
import "./App.css";

import Parent from "./Components/Parent/Parent";
import About from "./Components/About/About";
import Child from "./Components/Child/Child";
import Portfolio from "./Components/Portfoilo/Portfoilo";
import Contact from "./Components/Contact/Contact";
function App() {
  const [activeLink, setActiveLink] = useState('About');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Parent activeLink={activeLink} handleLinkClick={handleLinkClick} />
      {activeLink === 'About' && <About />}
      {activeLink === 'Portfolio' && <Portfolio />}
      {activeLink === 'Contact' && <Contact />}
      <Child />
    </>
  );
}

export default App;
