// import React from 'react';
import { useEffect, useState } from "react";
import CamperList from "../../components/CamperList/CamperList";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectDataCatalog } from "../../store/catalogSlice.selectors";
import { apiGetCatalog } from "../../store/catalogSlice";
import css from "./Catalog.module.css";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [isVisibleLoadMoreBtn, setIsVisibleLoadMoreBtn] = useState(true);
  const perPage = 4;
  const dispatch = useDispatch();

  //const locationFilter = useSelector(selectLocationFilter);
  const catalogData = useSelector(selectDataCatalog);
  //console.log(locationFilter);
  //const isLoading = useSelector(selectIsLoading);

  const handleClick = () => {
    setPage((prevState) => prevState + 1);
    console.log(catalogData);
  };
  useEffect(() => {
    if (catalogData.length === 0 || catalogData.length / perPage < page) {
      setIsVisibleLoadMoreBtn(false);
    } else {
      setIsVisibleLoadMoreBtn(true);
    }
  }, [catalogData, page]);

  useEffect(() => {
    dispatch(apiGetCatalog(page));
  }, [dispatch, page]);

  return (
    <section className={css.catalog}>
      <Filter />
      <div className={css.listWrapper}>
        <CamperList catalogData={catalogData} />
        {isVisibleLoadMoreBtn && (
          <button onClick={handleClick} className={css.btn}>
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default Catalog;
