import { createSelector } from "@reduxjs/toolkit";

const selectCatalog = (state) => state.catalog;

export const selectDataCatalog = createSelector(
  selectCatalog,
  (catalog) => catalog.catalog
);

export const selectStatus = createSelector(
  selectCatalog,
  (catalog) => catalog.status
);

export const selectError = createSelector(
  selectCatalog,
  (catalog) => catalog.error
);

export const selectIsLoading = createSelector(
  selectCatalog,
  (catalog) => catalog.isLoading
);
