import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "authToken",
  initialState: {
    accessToken: "",
    refreshToken: "",
  },
  reducers: {
    setAuthToken: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      return state;
    },
  },
});

export const { setAuthToken } = tokenSlice.actions;
export default tokenSlice.reducer;
