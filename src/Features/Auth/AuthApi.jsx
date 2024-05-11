import { apiSlice } from "../Api/ApiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        // end point
        registerApi:builder.mutation({
            query:(data)=> ({
                    url:`/register`,
                    method:"POST",
                    body:data
    
                })
            
        }),
            // log in 
    loginApi:builder.mutation({
        query:(data)=>({
            url:`/login`,
            method:"POST",
            body:data
        })
    }),

    // logout
    logOutApi:builder.mutation({
query:()=>({
    url:`/logout`,
    method:"POST"
})
    }),

    // upload image
    uploadImgApi:builder.mutation({
query:(data)=>({
    url:`/profileImg`,
    method:"POST",
    body:data
}),
invalidatesTags:()=>["currentUser"]
    }),

    getCurrentUser:builder.query({
        query:()=>({
            url:`/currentUser`,
            method:"GET"
        }),
        providesTags:()=>["currentUser"]
    }),

    updateUserInfo:builder.mutation({
        query:(data)=>({
            url:`/userInfo`,
            method:"POST",
            body:data
        }),
        invalidatesTags:()=>["currentUser"]
    }),

    changePassword:builder.mutation({
        query:(data)=>({
            url:`/changePassword`,
            method:"POST",
            body:data
        }),
        invalidatesTags:()=>["currentUser"]
    })




    })

})

export const {useRegisterApiMutation,useLoginApiMutation,useLogOutApiMutation,useUploadImgApiMutation,useGetCurrentUserQuery,useUpdateUserInfoMutation,useChangePasswordMutation }=authApi