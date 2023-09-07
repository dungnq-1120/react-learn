import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserByIdThunk = createAsyncThunk(
  "users/fetchById",
  async (userId: number, thunkAPI) => {
    try {
      const response = await fetch(`https://rddd/${userId}`);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);