import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalogSlice";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
//import storage from "redux-persist/lib/storage";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});
//export const persistor = persistStore(store);
