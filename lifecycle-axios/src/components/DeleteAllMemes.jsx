import React from "react";

const DeleteAllMemes = props => {
  return (
    <button className={`clickable`} onClick={props.onDeleteAllMemes}>
      Delete All
    </button>
  );
};

export default DeleteAllMemes;
