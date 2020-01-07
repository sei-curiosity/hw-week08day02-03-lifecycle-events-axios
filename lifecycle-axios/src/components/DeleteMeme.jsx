import React from "react";

const DeleteMeme = props => {
  return (
    <button className="clickable" onClick={props.onDeleteMeme}>
      Delete
    </button>
  );
};

export default DeleteMeme;
