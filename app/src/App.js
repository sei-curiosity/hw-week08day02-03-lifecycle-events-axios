import React, { Component } from 'react';
import './App.css';
import memes from './memeArray'
import Memegen from './Components/Memegen/Memegen';

class App extends Component {
  state = { 
    memes: memes
   }
  render(){

    const allMemes = this.state.memes.map(meme => {
      return(
        <div className="meme">
          <h2>{meme.title}</h2>
          <img src={meme.image} />
        </div>
      )
    })

    return (
      <div className="App">
        {allMemes}
      </div>
    )
  }
}

export default App;
