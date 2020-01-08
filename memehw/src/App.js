import React from 'react';
import './App.css';
//import Lyfecycle from './components/lyfecycle'
import Header from './components/header/header'
import Memegen from './components/memegen/memegen'
import axios from 'axios'
class App extends React.Component {

  deleteMemes = () => {
    
}
 render(){
  return (
    <div className="App">
      <Header></Header>
      <Memegen>

      </Memegen>
      
      
    </div>
  );
}

 }


export default App;
