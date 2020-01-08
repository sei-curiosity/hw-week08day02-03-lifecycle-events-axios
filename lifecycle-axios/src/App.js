import React, { Component } from "react";
// import data from "./data";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import AddNewMeme from "./components/AddNewMeme";
import axios from "axios";

class App extends Component {
  state = {
    memes: [],
    theme: false,
    white: ["w-color", "w-body-bgc", "w-input-focus", ""],
    dark: ["d-color", "d-body-bgc", "d-input-focus", "d-btn-bgc"]
  };

  componentDidMount() {
    // this.setState({ memes: data }); // static data
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(response => response.data.data)
      .then(data => this.setState({ memes: data.memes }))
      .catch(error => console.log(error));
  }

  onChangeTheme = () => {
    const { theme } = this.state;
    this.setState({ theme: !theme });
  };

  getCurrentTheme = () => {
    const { theme, white, dark } = this.state;
    return theme ? { theme: dark, type: theme } : { theme: white, type: theme };
  };

  onDeleteAllMemes = () => {
    this.setState({ memes: [] });
  };

  onDeleteMeme = id => {
    // copy memes
    const memes = [...this.state.memes];
    // get index
    const index = memes.findIndex(meme => meme.id === id);
    // check if index is greater than -1
    if (index > -1) {
      // remove the item from array
      memes.splice(index, 1);

      // update state
      this.setState({ memes });
    }

    return false;
  };

  onAddNewMeme = meme => {
    const memes = [...this.state.memes];
    meme.id = this.state.memes.length + 1; // fake ID !
    memes.push(meme);
    this.setState({ memes });
  };

  render() {
    const {
      getCurrentTheme,
      onChangeTheme,
      onDeleteAllMemes,
      onDeleteMeme,
      onAddNewMeme
    } = this;

    const { theme } = getCurrentTheme();
    const [color] = theme;

    return (
      <div className="App">
        <Navbar
          getCurrentTheme={getCurrentTheme}
          onChangeTheme={onChangeTheme}
          onDeleteAllMemes={onDeleteAllMemes}
        />

        <AddNewMeme
          onAddNewMeme={onAddNewMeme}
          getCurrentTheme={getCurrentTheme}
        />
        <div className="memes flex flex-wrap justify-content-center align-items-center">
          {this.state.memes.length <= 0 && (
            <h3 className={color}>There's No Memes.</h3>
          )}
          {this.state.memes.length > 0 &&
            this.state.memes.map(meme => (
              <Meme
                key={meme.id}
                id={meme.id}
                title={meme.name}
                image={meme.url}
                getCurrentTheme={getCurrentTheme}
                onDeleteMeme={onDeleteMeme}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
