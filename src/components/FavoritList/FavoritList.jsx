//import React from "react";
import { useSelector } from "react-redux";
import { favoritesCatalog } from "../../store/catalogSlice.selectors";
import CamperItem from "../CamperItem/CamperItem";
import css from "./FavoritList.module.css";

function FavoritList() {
  const favorites = useSelector(favoritesCatalog);
  console.log(favorites);

  return (
    <ul className={css.camperList}>
      {favorites.length > 0 ? (
        favorites.map(({ data }) => <CamperItem key={data._id} data={data} />)
      ) : (
        <p>No one favorite </p>
      )}
    </ul>
  );
}

export default FavoritList;
