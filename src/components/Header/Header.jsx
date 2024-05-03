//import React from 'react';
import css from "./Header.module.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink className={css.headerNavigation} to="/">
        Your Camper
      </NavLink>
      <NavLink className={css.headerNavigation} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={css.headerNavigation} to="/favorite">
        Favorite
      </NavLink>
    </header>
  );
};

export default Header;
