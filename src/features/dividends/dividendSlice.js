import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dividendService from "./dividendService";

const initialState = {
  dividends: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createDividend = createAsyncThunk(
  "dividends/create",
  async (dividendData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await dividendService.createDividend(dividendData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get dividends

// Delete dividend
