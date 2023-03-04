import React, { useState } from "react";
import arrowIcon from "../../assets/icons/arrow.png";
import fullscreenIcon from "../../assets/icons/fullscreen.png";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className="header-left header-section" onClick={toggleMenu}>
        <div className="os-menu header-left-item clickable">
          joniOS 3000
          <img src={arrowIcon} className="header-icon" />
        </div>
      </div>
      <div className="header-right header-section">
        <div className="header-fullscreen header-right-item clickable">
          <img src={fullscreenIcon} className="header-icon" />
          <span className="header-fullscreen-text hide-mobile">Fullscreen</span>
        </div>
        <span className="header-clock header-right-item">
          {`${time.getHours()}:${time.getMinutes()}`}
        </span>
        <span className="header-date header-right-item">Fri 3 Mar 2023</span>
      </div>
      {/*This is the menu that opens when menu is clicked*/}
      {openMenu ? (
        <div className="open-menu">
          <ul className="open-menu-list">
            <li className="open-menu-list-item clickable">
              nonni
              <img src={arrowIcon} className="list-item-icon" />
            </li>
            <li className="open-menu-list-item clickable">
              nonni
              <img src={arrowIcon} className="list-item-icon" />
            </li>
            <li className="open-menu-list-item clickable">
              nonni
              <img src={arrowIcon} className="list-item-icon" />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;