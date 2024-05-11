import { apiSlice } from "../Api/ApiSlice";

export const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // END POINT
    searchApi: builder.mutation({
      query: (data) => ({
        url: `/search?name=${data?.name}&city=${data?.city}&category=${data?.category}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useSearchApiMutation } = searchApi;
