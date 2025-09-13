import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,
    totalAmount: 0,
    totalLikes: 0,
  },

  reducers: {
    addItemToCart(state, action) {
      const existingProduct = state.data.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        const tempCart = state.data.map((product) => {
          if (product.id === action.payload.id) {
            let newQty = product.quantity + action.payload.quantity;
            let newTotalPrice = newQty * product.price;

            return { ...product, quantity: newQty, totalPrice: newTotalPrice };
          } else {
            return product;
          }
        });
        state.data = tempCart;
      } else {
        state.data.push(action.payload);
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const productIndex = state.data.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        const updateProduct = {
          ...state.data[productIndex],
          quantity: Math.max(quantity || 1, 1),
        };
        updateProduct.totalPrice = updateProduct.price * updateProduct.quantity;

        state.data[productIndex] = updateProduct;
      }
    },

    removeItems(state, action) {
      const cartTemp = state.data.filter(
        (item) => item.id !== action.payload.id
      );

      state.data = cartTemp;
    },

    getCartTotal(state) {
      let { totalAmount, totalItems } = state.data.reduce(
        (cartTotal, item) => {
          const { quantity, totalPrice } = item;
          cartTotal.totalItems += quantity;
          cartTotal.totalAmount += totalPrice;
          return cartTotal;
        },
        { totalItems: 0, totalAmount: 0 }
      );

      state.totalItems = totalItems;
      state.totalAmount = totalAmount;
    },
    addLike: (state) => {
      state.totalLikes += 1;
    },
    removeLike: (state) => {
      if (state.totalLikes > 0) state.totalLikes -= 1;
    },
    resetLikes: (state) => {
      state.totalLikes = 0;
    },
  },
});

export const {
  addItemToCart,
  updateQuantity,
  removeItems,
  getCartTotal,
  addLike,
  removeLike,
} = cartSlice.actions;

export default cartSlice.reducer;
