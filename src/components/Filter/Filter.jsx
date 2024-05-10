//import React from "react";
import Select from "react-select";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuWind } from "react-icons/lu";
import { TbToolsKitchen2 } from "react-icons/tb";
import { TbAutomaticGearbox } from "react-icons/tb";
import { LuShowerHead } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { selectDataCatalog } from "../../store/catalogSlice.selectors";

import css from "./Filter.module.css";
import { filterByLocation } from "../../store/catalogSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const catalogData = useSelector(selectDataCatalog);
  const uniqueLocations = {};

  catalogData.forEach(({ location }) => {
    uniqueLocations[location] = true;
  });

  const arrayUnicLocation = Object.keys(uniqueLocations);
  //console.log(arrayUnicLocation);
  const onSelectClick = (selectedOption) => {
    console.log(selectedOption.value);
    dispatch(filterByLocation(selectedOption.value));
  };
  return (
    <div className={css.filter}>
      <p className={css.location}>Location</p>
      <Select
        className={css.selector}
        onChange={onSelectClick}
        options={arrayUnicLocation.map((location) => ({
          value: location,
          label: location,
        }))}
        placeholder="Select location.."
      />
      <p className={css.filters}>Filters</p>
      <h2 className={css.title}>Vehicle equipment</h2>
      <ul className={css.btnList}>
        <li>
          <div className={css.btn}>
            <LuWind />
            <span>AC</span>
          </div>
        </li>
        <li>
          {" "}
          <div className={css.btn}>
            <TbAutomaticGearbox />
            <span>Automtic</span>
          </div>
        </li>
        <li>
          {" "}
          <div className={css.btn}>
            <TbToolsKitchen2 />
            <span>Kitchen</span>
          </div>
        </li>
        <li>
          {" "}
          <div className={css.btn}>
            <PiTelevisionSimple />
            <span>TV</span>
          </div>
        </li>
        <li>
          {" "}
          <div className={css.btn}>
            <LuShowerHead />

            <span>Shower/WC</span>
          </div>
        </li>
      </ul>
      <h2 className={css.title}>Vehicle type</h2>
      <ul className={css.btnList}>
        <li>
          <div className={css.btn}>
            <span>Van</span>
          </div>
        </li>
        <li>
          {" "}
          <div className={css.btn}>
            <span>fully integrated</span>
          </div>
        </li>
        <li>
          <div className={css.btn}>
            <span>Alcove</span>
          </div>
        </li>
      </ul>
      <button className={css.button}>Search</button>
    </div>
  );
};

export default Filter;
