import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PoslugaState {
  posluga: number;
}

const initialState: PoslugaState = {
  posluga: 0,
};

const poslugaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    poslugaPage: (state, actions: PayloadAction<number>) => {
      state.posluga = actions.payload;
    },
  },
});

export const { poslugaPage } = poslugaSlice.actions;

export default poslugaSlice.reducer;
