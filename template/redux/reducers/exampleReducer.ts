import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExampleState } from "types/redux/ExampleState";
import type { AppState } from "../store";

const initialState: ExampleState = {
  exampleSetting: true,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setExampleSetting: (state, action: PayloadAction<boolean>) => {
      state.exampleSetting = action.payload;
    },
  },
  extraReducers: (_builder) => {},
});

export const { setExampleSetting } = exampleSlice.actions;

export const selectExampleSetting = (state: AppState) =>
  state.example.exampleSetting;

export default exampleSlice.reducer;
