import { PayloadAction } from '@reduxjs/toolkit';
import { CartState, IItem } from './cart.model';
import { addItemToCart, removeItemFromCart } from './cart.utils';

export const toggleCartHiddenReducer = (state: CartState) => {
  state.hidden = !state.hidden;
};
export const addItemReducer = (
  state: CartState,
  action: PayloadAction<IItem>
) => {
  state.cartItems = addItemToCart(state.cartItems, action.payload);
};
export const clearItemFromHiddenReducer = (
  state: CartState,
  action: PayloadAction<IItem>
) => {
  state.cartItems = state.cartItems.filter(
    (cartitem: IItem) => cartitem.id !== action.payload.id
  );
};
export const remoteItemReducer = (
  state: CartState,
  action: PayloadAction<IItem>
) => {
  state.cartItems = removeItemFromCart(state.cartItems, action.payload);
};
