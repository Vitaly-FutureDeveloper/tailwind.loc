import React, {useState} from "react";
import TopBlock from "./TopBlock/TopBlock";
import Navigation from "./Navigation/Navigation";

import styles from "./NavMenu.module.css";


export const NavMenu: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={toggleMenu ? styles.navMenu : `${styles.navMenu} rounded-bl-large`}>
      <TopBlock/>
      <Navigation toggleMenu={toggleMenu} onToggleMenu={onToggleMenu}/>
    </div>
  );
};

export default NavMenu;