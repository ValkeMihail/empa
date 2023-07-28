
import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companySlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
