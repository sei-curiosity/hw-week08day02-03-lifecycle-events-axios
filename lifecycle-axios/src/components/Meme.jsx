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

    const { theme } = this.props.getCurrentTheme();
    const [color] = theme;

    return (
      <div
        className={`meme flex flex-column justify-content-center align-items-center m-25 w-card ${color}`}
      >
        <h3 className="clickable" onClick={this.handleHide}>
          {title}
        </h3>
        <img src={image} alt={title} className={className} />
      </div>
    );
  }
}

export default Meme;
