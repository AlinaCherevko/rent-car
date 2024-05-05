//import React from "react";
import { useSelector } from "react-redux";
import { favoritesCatalog } from "../../store/catalogSlice.selectors";
import css from "./FavoritList.module.css";
import CamperItem from "../CamperItem/CamperItem";

function FavoritList() {
  const favoritesData = useSelector(favoritesCatalog);
  console.log(favoritesData);

  return (
    <div>
      <ul className={css.camperList}>
        {Array.isArray(favoritesData) &&
          favoritesData.map((data) => (
            <CamperItem key={data._id} data={data}></CamperItem>
          ))}
      </ul>
    </div>
  );
}

export default FavoritList;
