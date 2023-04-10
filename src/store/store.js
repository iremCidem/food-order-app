import { configureStore } from "@reduxjs/toolkit";
import { CartSliceReducer } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    Cart: CartSliceReducer,
  },
});
