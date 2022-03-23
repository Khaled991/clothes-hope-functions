import { DirectoryState } from "./directory.model";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DirectoryState = {
  cartItems: [],
};

export const DirectorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export default DirectorySlice.reducer;
