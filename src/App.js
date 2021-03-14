// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './componets/NavBar';
import About from './componets/About';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Home from './componets/Home';


function App() {
  return (
    <div className="App">

      <NavBar/>

      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/projects">
            <Projects />
        </Route>

        <Route exact path="/contact">
            <Contact />
        </Route>

        <Route path="/">
            <Home />
        </Route>

      </Switch>
      

    </div>
  );
}

export default App;
