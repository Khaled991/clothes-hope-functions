import { RootState } from "../store";

export const selectDirectory = (state: RootState) => state.directory.cartItems;
