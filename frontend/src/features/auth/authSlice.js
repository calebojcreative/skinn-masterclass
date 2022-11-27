import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  subscriber: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const subscribe = createAsyncThunk(
  "auth/subscribe",
  async (subscriber, thunkAPI) => {
    try {
      return await authService.subscribe(subscriber);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subscriber = action.payload;
      })
      .addCase(subscribe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.subscriber = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
