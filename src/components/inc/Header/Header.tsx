import React from "react";
import Left from "./Left/Left";
import NavMenu from "./NavMenu/NavMenu";

export const Header: React.FC = () => {


  return (
    <header className="absolute top-0 w-full text-white flex z-50">
      <Left/>
      <NavMenu/>
    </header>
  );
};

export default Header;