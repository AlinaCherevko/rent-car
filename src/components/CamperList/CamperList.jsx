//import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  selectDataCatalog,
  //selectIsLoading,
} from "../../store/catalogSlice.selectors";
import { useEffect, useState } from "react";
import { apiGetCatalog } from "../../store/catalogSlice";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";

export default function CamperList() {
  const [page, setPage] = useState(1);
  const [isVisibleLoadMoreBtn, setIsVisibleLoadMoreBtn] = useState(false);

  const dispatch = useDispatch();
  const catalogData = useSelector(selectDataCatalog);
  //const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(apiGetCatalog());
  }, [dispatch]);

  //console.log(catalogData);

  return (
    <>
      <ul className={css.camperList}>
        {catalogData.map((data) => (
          <CamperItem key={data._id} data={data}></CamperItem>
        ))}
      </ul>
    </>
  );
}
