import React from "react";
import Theme from "./Theme";
import DeleteAllMemes from "./DeleteAllMemes";

const Navbar = props => {
  const { theme } = props.getCurrentTheme();
  const [color] = theme;
  return (
    <div className="flex align-items-center justify-content-between">
      <h1 className={color}>My Great Memes</h1>
      <div>
        <div>
          <Theme
            onChangeTheme={props.onChangeTheme}
            getCurrentTheme={props.getCurrentTheme}
          />
        </div>

        <DeleteAllMemes onDeleteAllMemes={props.onDeleteAllMemes} />
      </div>
    </div>
  );
};

export default Navbar;
