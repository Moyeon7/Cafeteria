import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice'; // Update the path if needed

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
