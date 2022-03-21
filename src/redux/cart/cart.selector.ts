import type { RootState } from '../store';

// Other code such as selectors can use the imported `RootState` type
const selectCart = (state: RootState) => state.cart;
const selectHiddenCart = (state: RootState) => state.cart.hidden;
const selectCartItems = (state: RootState) => state.cart.cartItems;
