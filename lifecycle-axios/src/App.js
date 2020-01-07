import React, { Component } from "react";
import data from "./data";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    memes: [],
    theme: false,
    white: ["w-color", "w-body-bgc", "w-input-focus", ""],
    dark: ["d-color", "d-body-bgc", "d-input-focus", "d-btn-bgc"]
  };

  componentDidMount() {
    this.setState({ memes: data });
  }

  onChangeTheme = () => {
    const { theme } = this.state;
    this.setState({ theme: !theme });
  };

  getCurrentTheme = () => {
    const { theme, white, dark } = this.state;
    return theme ? { theme: dark, type: theme } : { theme: white, type: theme };
  };

  render() {
    const { getCurrentTheme, onChangeTheme } = this;

    return (
      <div className="App">
        <Navbar
          getCurrentTheme={getCurrentTheme}
          onChangeTheme={onChangeTheme}
        />
        <div className="memes flex flex-wrap justify-content-center align-items-center">
          {this.state.memes.map(meme => (
            <Meme
              key={meme.id}
              id={meme.id}
              title={meme.title}
              image={meme.image}
              getCurrentTheme={getCurrentTheme}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
