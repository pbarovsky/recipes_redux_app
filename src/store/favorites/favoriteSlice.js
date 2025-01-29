import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const ifExist = state.some((r) => r.id === recipe.id);
      if (ifExist) {
        const index = state.findIndex((item) => item.id === recipe.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else state.push(recipe);
    },
  },
});

export const { actions, reducer } = favoriteSlice;
