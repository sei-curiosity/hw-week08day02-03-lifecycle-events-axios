import React from "react";

const Theme = props => {
  const { theme, type } = props.getCurrentTheme();
  const [color, background, , btn] = theme;

  document.body.style.backgroundColor = `var(--${background})`;
  return (
    <button
      className={`clickable ${color} ${type ? background : ""} ${btn}`}
      onClick={props.onChangeTheme}
    >
      Change Theme
    </button>
  );
};

export default Theme;
