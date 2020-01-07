import React, { Component } from "react";

class Meme extends Component {
  state = {
    visible: false
  };

  handleHide = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  render() {
    const { title, image } = this.props;

    // check index.css
    const className = this.state.visible ? "visible" : "hidden";

    return (
      <div className="meme">
        <h3 className="clickable" onClick={this.handleHide}>
          {title}
        </h3>
        <img src={image} alt={title} className={className} />
      </div>
    );
  }
}

export default Meme;
