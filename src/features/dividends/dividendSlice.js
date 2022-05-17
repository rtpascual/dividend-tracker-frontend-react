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

export const getDividends = createAsyncThunk(
  "dividends/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await dividendService.getDividends(token);
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

export const deleteDividend = createAsyncThunk(
  "dividends/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await dividendService.deleteDividend(id, token);
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

export const dividendSlice = createSlice({
  name: "dividend",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDividend.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDividend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dividends.push(action.payload);
      })
      .addCase(createDividend.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDividends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDividends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(getDividends.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteDividend.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDividend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dividends = state.dividends.filter((goal) => {
          goal._id !== action.payload.id;
        });
      })
      .addCase(deleteDividend.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = dividendSlice.actions;
export default dividendSlice.reducer;
