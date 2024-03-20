import React from "react";
import Menu from "./Menu";
import MenuItem from "./Menuitem";

const App = () => {
  return (
    <div>
      <Menu>
        <MenuItem href="/" icon="home">
          Home
        </MenuItem>
        <MenuItem href="/services" icon="services">
          Services
        </MenuItem>
        <MenuItem href="/pricing" icon="pricing">
          Pricing
        </MenuItem>
        <MenuItem href="/blog" icon="blog">
          Blog
        </MenuItem>
      </Menu>
    </div>
  );
};

export default App;
