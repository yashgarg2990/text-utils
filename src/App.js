import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
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

  const [mode, setMode] = useState("light");

  let routes = (
    <Switch>
      <Route exact path="/">
        <Textform heading="enter your text here " mode={mode} />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  );

  return (
    <>
      <Router>
        <Navbar title="Yash Garg" mode={mode} toggleMode={toggleMode} />
        {routes}
      </Router>
    </>
  );
}

export default App;
