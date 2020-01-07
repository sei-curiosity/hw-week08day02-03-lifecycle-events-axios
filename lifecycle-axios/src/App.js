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
        <h1>Hello, World</h1>
      </div>
    );
  }
}

export default App;
