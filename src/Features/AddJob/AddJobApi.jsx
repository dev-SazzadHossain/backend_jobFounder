import { apiSlice } from "../Api/ApiSlice";

export const addJobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addJob: builder.mutation({
      query: (data) => ({
        url: `/addJob`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => ["addJob", "category"],
    }),
    allJobsApi: builder.query({
      query: (data) => ({
        url: `/allJobs?name=${data?.name}&city=${data?.city}&category=${data?.category}`,
        method: "GET",
      }),
      providesTags: () => ["addJob"],
    }),

    myPostApi: builder.query({
      query: () => ({
        url: `/myJobs`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddJobMutation, useAllJobsApiQuery, useMyPostApiQuery } =
  addJobApi;
