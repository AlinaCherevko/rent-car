// import React from 'react';
import FavoritList from "../../components/FavoritList/FavoritList";
import css from "./Favorite.module.css";

const Favorite = () => {
  return (
    <section className={css.favoriteSection}>
      <h1 className={css.title}>Welcome To Favorite List</h1>
      <FavoritList />
    </section>
  );
};

export default Favorite;
