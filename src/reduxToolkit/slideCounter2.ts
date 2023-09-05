import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICouterStateType {
  count: number;
}

const initialState: ICouterStateType = {
  count: 0,
};

export const counterSice = createSlice({
  name: "counterSlice2",
  initialState,
  reducers: {
    addCount2: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    subCount2: (state) => {
      state.count -= 1;
    },
  },
});

export const { addCount2, subCount2 } = counterSice.actions;

export default counterSice.reducer