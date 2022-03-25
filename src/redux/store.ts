import { configureStore } from "@reduxjs/toolkit";
import directoryReducer from "./directory/directory.slice";
import cartReducer from "./cart/cart.slice";
import shopReducer from "./shop/shop.slice";
import userReducer from "./user/user.slice";

const store = configureStore({
  reducer: {
    directory: directoryReducer,
    cart: cartReducer,
    shop: shopReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
