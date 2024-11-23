// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import customerMenuReducer from './customerMenuSlice';

export const store = configureStore({
  reducer: {
    customerMenu: customerMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
