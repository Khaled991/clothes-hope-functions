import { createSlice } from "@reduxjs/toolkit";
import {
  addItemReducer,
  toggleCartHiddenReducer,
  clearItemFromHiddenReducer,
  remoteItemReducer,
} from "./cart.reducer";
import { CartState } from "./cart.model";

const initialState: CartState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    toggleCartHidden: toggleCartHiddenReducer,
    addItem: addItemReducer,
    clearItemFromHidden: clearItemFromHiddenReducer,
    remoteItem: remoteItemReducer,
  },
});

export const { toggleCartHidden, addItem, clearItemFromHidden, remoteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
