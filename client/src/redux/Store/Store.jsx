import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../CreateSlice";

const rooteducer = {
  cart: cartSlice,
};
export const store = configureStore({
  reducer: rooteducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
