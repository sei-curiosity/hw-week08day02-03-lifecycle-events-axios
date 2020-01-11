import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lyfecycle from './lyfecycle/Lyfecycle'
import Header from './header/Header'
import Memegen from './memegen/Memegen';

function App() {
  return (
    <div className="App">
      <Lyfecycle />
      <Memegen />
    </div>
  );
}

export default App;
