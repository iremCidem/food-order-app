import { createSlice, nanoid } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalCost: 0,
  },
  reducers: {
    AddCartList: (state, action) => {
      state.cartList.push({
        name: action.payload.menuName,
        cost: action.payload.price,
        id: nanoid(),
      });
      state.totalCost = state.cartList.reduce(
        (acc, item) => acc + Number(item.cost),
        0
      );
    },
    DeleteCartList: (state, action) => {
      const updated = state.cartList.filter((cart) => {
        return cart.id !== action.payload;
      });
      state.cartList = updated;
      state.totalCost = state.cartList.reduce(
        (acc, item) => acc + Number(item.cost),
        0
      );
    },
    deleteAllItems: (state) => {
      state.cartList = [];
      state.totalCost = 0;
    },
  },
});
export const { AddCartList, DeleteCartList, deleteAllItems } =
  CartSlice.actions;
export const CartSliceReducer = CartSlice.reducer;
