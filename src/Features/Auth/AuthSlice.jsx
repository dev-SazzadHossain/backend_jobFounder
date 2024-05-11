import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:JSON.parse(localStorage.getItem("currentUser")),
    refreshToken:JSON.parse(localStorage.getItem("refreshToken")),
    accessToken:null
}
export const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        // register
        register:(state,action)=>{
            state.user = action.payload.user;
        },
        // register

        // login 
        login:(state,action)=>{
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        // login

        // logout
        logout:(state,action)=>{
            state.user = null,
            state.accessToken = null
            state.refreshToken = null
        }
        // logout
    }
})


export default authSlice.reducer;
export const {register,login,logout}=authSlice.actions