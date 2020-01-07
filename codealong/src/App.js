import React from 'react';

import Lyfcycle from './components/Lyfcycle.jsx';
import Header from './components/Header.jsx';
import Memegen from './components/Memegen.jsx';
import './App.css';
import data from './components/data.js'

function App() {

  return (
    <div className="App ">
      <Lyfcycle></Lyfcycle>
      <Header/>
      
     <div><Memegen data={data}/></div>
      
    </div>
  );
}

export default App;
