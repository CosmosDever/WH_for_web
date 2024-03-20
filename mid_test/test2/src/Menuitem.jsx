import React from "react";

const MenuItem = ({ href, icon, children }) => {
  return (
    <li>
      <a href={href}>
        {icon && <i>{icon}</i>}
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
