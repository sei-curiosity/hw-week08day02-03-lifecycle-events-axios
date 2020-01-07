import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Lyfcycle from './components/Lyfcycle'
import Header from './components/Header'
import Memegen from './components/Memegen'
import Meme from './components/Meme'
import memeData from '../src/memeData'

function App() {
  return (
    <div className="App">
      
     <Lyfcycle />
     <Header />
     <Memegen />
     <Meme />

    </div>
  );
}

export default App;
