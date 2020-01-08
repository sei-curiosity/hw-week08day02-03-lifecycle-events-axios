import React from "react";

const DeleteMeme = props => {
  const { color, button } = props.theme;
  return (
    <button
      className={`clickable ${color ? color : ""} ${button ? button : ""}`}
      onClick={props.onDeleteMeme}
    >
      Delete
    </button>
  );
};

export default DeleteMeme;
