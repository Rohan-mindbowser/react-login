import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import tokenReducer from "./slices/tokenSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authSlice.middleware),
});
