import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lifecycle from './component/Lifecycle/Lifecycle'
import Header from './component/Header/Header'
import Memegen from './component/Memegen/Memegen'
import memeList from './memes'


function App() {
  return (
    <div>
     <Lifecycle />
     <Header/>
   
     <Memegen/>
      
     
    </div>
  );
}

export default App;
