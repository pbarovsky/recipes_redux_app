import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favoriteSlice";
import { userSlice } from "./user/userSlice";
import { api } from "./api/api"; 
import { createLogger } from "redux-logger";

const logger = createLogger()

const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});
