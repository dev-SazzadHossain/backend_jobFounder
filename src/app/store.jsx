import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/Api/ApiSlice";
import { authSlice } from "../Features/Auth/AuthSlice";
import { searchSlice } from "../Features/Search/searchSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
