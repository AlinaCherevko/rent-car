import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const $advertsInstance = axios.create({
  baseURL: "https://66329a87c51e14d69564edc7.mockapi.io",
});

const initialState = {
  catalog: [],
  favorites: [],
  status: "idle",
  isLoading: false,
  error: null,
};

export const apiGetCatalog = createAsyncThunk(
  "catalog/apiGetCatalog",
  async (page, thunkApi) => {
    try {
      const { data } = await $advertsInstance.get(
        `/adverts?page=${page}&limit=4`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const catalogSlice = createSlice({
  // Ім'я слайсу
  name: "advertsCatalog",
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт екстраредюсерів

  extraReducers: (builder) =>
    builder

      //Get Catalog
      .addCase(apiGetCatalog.pending, (state) => {
        state.status = "pending";
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetCatalog.fulfilled, (state, action) => {
        state.status = "success";
        state.isLoading = false;
        state.catalog = [...state.catalog, ...action.payload];
      })
      .addCase(apiGetCatalog.rejected, (state, action) => {
        state.status = "error";
        state.isLoading = false;
        state.error = action.payload;
      }),
});
// Редюсер слайсу
export const catalogReducer = catalogSlice.reducer;

const favoritesSlice = createSlice({
  // Ім'я слайсу
  name: "favorites",
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addFavorite(state, action) {
      state.favorites = [...state.favorites, action.payload];
      console.log(state.favorites);
    },
    deleteFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload
      );
      console.log(action.payload);
    },
  },
});

// Генератори екшенів
export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
// Редюсер слайсу
export const favoritesReducer = favoritesSlice.reducer;
