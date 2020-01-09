import React from 'react';

import './App.css';
import Memes from './Components/Memes';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <header>
      <img src={logo} className="App-logo" alt="logo" />
         </header>
    

   
    <Memes/>
    </div>
  );
}

export default App;
