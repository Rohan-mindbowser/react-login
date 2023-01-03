import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000/api/" }),
  endpoints: (builder) => ({
    authToken: builder.mutation({
      query: (data) => ({
        url: `loginuser`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAuthTokenMutation } = authSlice;
