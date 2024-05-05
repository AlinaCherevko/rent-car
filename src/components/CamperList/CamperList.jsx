//import React from 'react'
//import { useDispatch, useSelector } from "react-redux";
//import { selectDataCatalog } from "../../store/catalogSlice.selectors";
//import { useEffect, useState } from "react";
//import { apiGetCatalog } from "../../store/catalogSlice";
import PropTypes from "prop-types";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";

export default function CamperList({ catalogData }) {
  // const [page, setPage] = useState(1);
  // const [isVisibleLoadMoreBtn, setIsVisibleLoadMoreBtn] = useState(true);
  // const perPage = 4;
  // const dispatch = useDispatch();
  // const catalogData = useSelector(selectDataCatalog);
  // //const isLoading = useSelector(selectIsLoading);

  // const handleClick = () => {
  //   setPage((prevState) => prevState + 1);
  //   console.log(catalogData.length);
  // };
  // useEffect(() => {
  //   if (catalogData.length === 0 || catalogData.length / perPage < page) {
  //     setIsVisibleLoadMoreBtn(false);
  //   } else {
  //     setIsVisibleLoadMoreBtn(true);
  //   }
  // }, [catalogData, page]);

  // useEffect(() => {
  //   dispatch(apiGetCatalog(page));
  // }, [dispatch, page]);

  return (
    <div className={css.listWrapper}>
      <ul className={css.camperList}>
        {catalogData.length > 0 &&
          catalogData.map((data) => (
            <CamperItem key={data.name} data={data}></CamperItem>
          ))}
      </ul>
    </div>
  );
}
CamperList.propTypes = {
  catalogData: PropTypes.array.isRequired,
};
