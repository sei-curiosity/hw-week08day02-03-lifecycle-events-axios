import React, { Component } from "react";
import data from "./data";
import Meme from "./components/Meme";

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
            <Meme
              key={meme.id}
              id={meme.id}
              title={meme.title}
              image={meme.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
