import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      var newmode = "dark";
      setMode(newmode);
      document.body.style.backgroundColor = "#323643";
    } else if (mode === "dark") {
      var mymode = "light";
      setMode(mymode);
      document.body.style.backgroundColor = "white";
      document.title = "Yash";
    }
  };

  return (
    <>
      <Navbar title="Yash Garg" mode={mode} toggleMode={toggleMode} />
      <Textform heading="enter your text here " mode={mode} />
      <About />
    </>
  );
}

export default App;
