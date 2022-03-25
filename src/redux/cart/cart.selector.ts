import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;
export const selectHiddenCart = (state: RootState) => state.cart.hidden;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
