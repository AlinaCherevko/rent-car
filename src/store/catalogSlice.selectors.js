import { createSelector } from "@reduxjs/toolkit";

export const selectDataCatalog = (state) => state.catalog.catalog;

export const selectStatus = (state) => state.catalog.status;

export const selectError = (state) => state.catalog.error;

export const selectIsLoading = (state) => state.catalog.isLoading;

export const favoritesCatalog = (state) => state.favorites.favorites;

export const selectLocationFilter = (state) => state.favorites.location;

export const selectFilterAdvertsByLocation = createSelector(
  [selectDataCatalog, selectLocationFilter],
  (catalog, location) => {
    return catalog.filter((data) => data.location === location);
  }
);
