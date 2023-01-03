import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "authToken",
  initialState: {
    accessToken: "",
    refreshToken: "",
  },
  reducers: {
    authToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      return;
    },
  },
});

export const { authToken } = tokenSlice.actions;
export default tokenSlice.reducer;
