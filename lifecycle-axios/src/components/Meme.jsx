import React, { Component } from "react";
import DeleteMeme from "./DeleteMeme";

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

    const { theme, type } = this.props.getCurrentTheme();
    const [color, , , button] = theme;

    return (
      <div
        className={`meme flex flex-column justify-content-center align-items-center m-25 w-card ${color}`}
      >
        <h3 className="clickable" onClick={this.handleHide}>
          {title}
        </h3>
        <DeleteMeme
          onDeleteMeme={() => this.props.onDeleteMeme(this.props.id)}
          theme={type ? { color, button } : {}}
        />
        <img src={image} alt={title} className={className} />
      </div>
    );
  }
}

export default Meme;
