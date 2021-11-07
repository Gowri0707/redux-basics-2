import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showShoppingCart: false,
  cartItems: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleShoppingCart(state) {
      state.showShoppingCart = !state.showShoppingCart;
    },
    replaceCart(state, action) {
      state.cartItems = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
    },
    addToCart(state, action) {
      state.changed = true;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity++;
        cartItem.totalPrice = cartItem.totalPrice + +cartItem.price;
      } else {
        state.cartItems = state.cartItems.concat({
          ...action.payload,
          totalPrice: +action.payload.price,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      state.changed = true;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.totalPrice = cartItem.totalPrice - cartItem.price;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
