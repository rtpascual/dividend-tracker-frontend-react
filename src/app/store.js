import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import dividendReducer from "../features/dividends/dividendSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dividends: dividendReducer,
  },
});
