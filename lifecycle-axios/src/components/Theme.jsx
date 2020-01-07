import React from "react";

let oldTheme = null;
const Theme = props => {
  const { theme, type } = props.getCurrentTheme();
  const [color, background, , btn] = theme;

  document.body.classList.add(background);
  if (oldTheme) {
    document.body.classList.remove(oldTheme);
  }

  oldTheme = background;
  return (
    <div>
      <button
        className={`clickable ${color} ${type ? background : ""} ${btn}`}
        onClick={props.onChangeTheme}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Theme;
