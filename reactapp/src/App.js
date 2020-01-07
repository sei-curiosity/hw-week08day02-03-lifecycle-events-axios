import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Lyfcycle from './components/Lyfcycle.jsx'
import Header from './components/Header.jsx'
import Memegen from './components/Memegen.jsx'
import memes from './memes'
import Meme from './Meme'
import ApiMemes from './components/Apimeme'


class App extends Component {
  constructor() {
    super();
    this.state = {
      mArray : memes
    }
  }
  render(){
    let memesCopy = [...this.state.mArray]
    console.log(memesCopy)
    return (
      <div className="App">
        <Lyfcycle />
        <Header />
        <Memegen /> 
        {memesCopy.map(meme=>{
          return(
            <Meme memeObj={meme} />
          )
        })}
        <ApiMemes />
      </div>
    );
  }
}

export default App;
