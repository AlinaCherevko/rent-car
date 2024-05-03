//import React from "react";
import css from "./Filter.module.css";
const genres = [];

const Filter = () => {
  const onSelectClick = (e) => {
    const { value } = e.currentTarget;
    console.log(value);
  };
  return (
    <div className={css.filter}>
      <p className={css.location}>Location</p>
      <select className={css.selector} onChange={onSelectClick}>
        <option> Select a genre</option>

        {genres.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
