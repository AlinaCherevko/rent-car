import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const $advertsInstance = axios.create({
  baseURL: "https://66329a87c51e14d69564edc7.mockapi.io",
});

const initialState = {
  catalog: [],
  status: "idle",
  isLoading: false,
  error: null,
};

export const apiGetCatalog = createAsyncThunk(
  "catalog/apiGetCatalog",
  async (_, thunkApi) => {
    try {
      const { data } = await $advertsInstance.get("/adverts");
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

      //Get Contact
      .addCase(apiGetCatalog.pending, (state) => {
        state.status = "pending";
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetCatalog.fulfilled, (state, action) => {
        state.status = "success";
        state.isLoading = false;
        state.catalog = action.payload;
      })
      .addCase(apiGetCatalog.rejected, (state, action) => {
        state.status = "error";
        state.isLoading = false;
        state.error = action.payload;
      }),
});

// Редюсер слайсу
export const catalogReducer = catalogSlice.reducer;
