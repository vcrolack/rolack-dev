import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/nav-logo/logo-buenoo.svg";

import { useScreenSize } from "../../hooks/useScreenSize";

export const HeaderNav = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const { width } = useScreenSize();

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="header">
      {width > 767 && (
        <>
          <div className="logo">
            <img src={logo} alt="logo header" />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </>
      )}

      {width < 767 && (
        <>
          <div className="logo">
            <img src={logo} alt="logo header" />
          </div>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          <div className={menuClass}>
            <ul>
              <hr />
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "activated" + burgerClass : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Portfolio
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Services
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  Contact
                </NavLink>
              </li>
              <hr />
            </ul>
          </div>
        </>
      )}
    </header>
  );
};
