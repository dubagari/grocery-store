import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../CreateSlice";
import userSlice from "./userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
