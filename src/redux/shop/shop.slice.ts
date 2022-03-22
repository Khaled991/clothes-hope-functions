import { ShopState } from "./shop.model";
import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "./shop.data";

const initialState: ShopState = {
  collections: SHOP_DATA,
};

export const DirectorySlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export default DirectorySlice.reducer;
