// import React from 'react';
import CamperList from "../../components/CamperList/CamperList";
import Filter from "../../components/Filter/Filter";
import css from "./Catalog.module.css";

const Catalog = () => {
  return (
    <section className={css.catalog}>
      <Filter />
      <CamperList />
    </section>
  );
};

export default Catalog;
