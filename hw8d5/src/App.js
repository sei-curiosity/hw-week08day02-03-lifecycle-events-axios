import React from 'react';
import Memegen from './components/Memegen'
import Meme from './components/Meme'
import Header from './components/Header'
import Lifecycle from './components/Lifecycle'

import './App.css';

function App() {
  return (
    <div className="App">
     <Lifecycle/>
     <Header />
  
     <Memegen/>
     <Meme />
     
    </div>
  );
}

export default App;
