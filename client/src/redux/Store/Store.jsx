import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../CreateSlice";
import userSlice from "./userSlice";

const rooteducer = {
  cart: cartSlice,
  user: userSlice,
};
export const store = configureStore({
  reducer: rooteducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
