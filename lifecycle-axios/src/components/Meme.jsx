import React, { Component } from "react";

class Meme extends Component {
  render() {
    const { title, image } = this.props;
    return (
      <div className="meme">
        <h3>{title}</h3>
        <img src={image} alt={title} />
      </div>
    );
  }
}

export default Meme;
