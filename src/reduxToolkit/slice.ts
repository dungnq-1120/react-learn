import { PayloadAction, createAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUserByIdThunk } from "./thunk";

export interface ICouterStateType {
  count: number;
  isLoading: boolean
}

const initialState: ICouterStateType = {
  count: 0,
  isLoading: false
};

export const actionCommon = createAction("common")

export const counterSice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    addCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    subCount: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByIdThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUserByIdThunk.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(fetchUserByIdThunk.fulfilled, (state) => {
      state.isLoading = false
    })
  }
});

export const { addCount, subCount } = counterSice.actions;
export default counterSice.reducer