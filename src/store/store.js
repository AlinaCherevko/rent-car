import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer, favoritesReducer } from "./catalogSlice";

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
// import storage from "redux-persist/lib/storage";

// const favoritesConfig = {
//   key: "favorites",
//   storage,
//   whitelist: ["favorites"],
// };

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,
    // favorites: persistReducer(favoritesConfig, favoritesReducer),
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
//export const persistor = persistStore(store);
