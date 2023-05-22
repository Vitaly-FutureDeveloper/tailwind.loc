import React from "react";
import Left from "./Left/Left";
import NavMenu from "./NavMenu/NavMenu";

export const Header: React.FC = () => {


  return (
    <header className="text-white">
      <Left/>
      <NavMenu/>
    </header>
  );
};

export default Header;