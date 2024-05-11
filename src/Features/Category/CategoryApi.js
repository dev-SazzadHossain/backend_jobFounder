import { apiSlice } from "../Api/ApiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints:builder=>({
        // category
        categoryApi:builder.mutation({
            query:(data)=>({
                url:`/category`,
                method:"POST",
                body:data
            }),
            invalidatesTags:()=>["category"]
        }),
        // all category
        allCategory:builder.query({
        query:()=>({
                 url:`/category`,
                 method:"GET"
           }),
           providesTags:()=>["category"]
        })
    })
})


export const {useCategoryApiMutation,useAllCategoryQuery}=categoryApi