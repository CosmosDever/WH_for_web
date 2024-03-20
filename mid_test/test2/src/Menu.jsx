import React from "react";

const Menu = ({ children }) => {
  return (
    <nav className="menu">
      <ul>{children}</ul>
    </nav>
  );
};

export default Menu;
