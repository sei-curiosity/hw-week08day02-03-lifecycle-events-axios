import React, { Component } from "react";

class AddNewMeme extends Component {
  state = {
    title: "",
    image: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const meme = { ...this.state };
    this.props.onAddNewMeme(meme);

    // clean input values
    this.setState({ title: "", image: "" });
  };

  render() {
    return (
      <div className="flex flex-column">
        <h3 className="ml-25">Add meme</h3>
        <form method="POST" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="mr-25 ml-25"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image"
            className="mr-25"
            onChange={this.handleChange}
          />
          <button className="clickable">Add</button>
        </form>
      </div>
    );
  }
}

export default AddNewMeme;
