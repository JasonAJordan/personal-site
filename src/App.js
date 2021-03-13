// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './componets/NavBar';

function App() {
  return (
    <div className="App">

      <NavBar/>

      <p>Place HOLDER P TAGS This will hold the information and will changed based on navbar</p>

      

    </div>
  );
}

export default App;
