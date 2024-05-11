import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:`http://localhost:8000/api/v1`,
        headers:{
            Authorization: JSON.parse(localStorage.getItem("refreshToken"))? `Bearer ${JSON.parse(localStorage.getItem("refreshToken"))}`:null
        }
    }),
    tagTypes:["category","addJob","currentUser"],
    endpoints:(builder)=>({})

})