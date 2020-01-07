import React from 'react';
import './App.css';
import Lifcycle from './components/lifecycle/Lifecycle';
import Header from './components/header/Header'
import Memgen from './components/memegen/Memegen'
import Meme from './components/meme/Meme'
import memes from './components/data/memes'

function App() {
  return (
    <div className="App">
     <Lifcycle/>
     <Header/>
     <Memgen/>
     
    </div>
  );
}

export default App;
