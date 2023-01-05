import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import tokenReducer from "./slices/tokenSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, tokenReducer);

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authSlice.middleware),
});

export const persistor = persistStore(store);
