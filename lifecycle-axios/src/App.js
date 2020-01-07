import React, { Component } from "react";
import data from "./data";

class App extends Component {
  state = {
    memes: []
  };

  componentDidMount() {
    this.setState({ memes: data });
  }

  render() {
    return (
      <div className="App">
        <h1>My Great Memes</h1>
        <div className="memes">
          {this.state.memes.map(meme => (
            <div className="meme" key={meme.id}>
              <h3>{meme.title}</h3>
              <img src={meme.image} alt={meme.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
