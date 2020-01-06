import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lyfcycle from './components/Lyfcycle.jsx'
import Header from './components/Header.jsx'
import Memegen from './components/Memegen.jsx'

function App() {
  return (
    <div className="App">
      <Lyfcycle />
      <Header />
      <Memegen /> 
    </div>
  );
}

export default App;
