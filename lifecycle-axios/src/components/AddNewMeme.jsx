import React, { Component } from "react";

class AddNewMeme extends Component {
  state = {
    name: "",
    url: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const meme = { ...this.state };
    // clean input values
    this.setState({ name: "", url: "" });
    this.props.onAddNewMeme(meme);
  };

  render() {
    const { theme, type } = this.props.getCurrentTheme();
    const [color, background, focus, button] = theme;

    return (
      <div className="flex flex-column">
        <h3 className={`ml-25 ${color}`}>Add meme</h3>
        <form method="POST" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className={`mr-25 ml-25 ${focus}`}
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="url"
            placeholder="url"
            className={`mr-25 ${focus}`}
            onChange={this.handleChange}
            value={this.state.url}
          />
          <button className={`clickable ${color} ${button}`}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddNewMeme;
