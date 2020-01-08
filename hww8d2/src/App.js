import React from 'react';
import logo from './logo.svg';
import './App.css';
import Memegen from './components/Memegen'
import Header from "./components/Header"
import Meme from './components/Meme'
function App() {
  return (
    <div className="App">
    
     <Header />
     <Memegen />
     <Meme />
    </div>
  );
}

export default App;
