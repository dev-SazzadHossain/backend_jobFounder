import { Register } from "../Model/Users/Register.model.js";

export const generateAccessAndRefreshToken=async(id)=>{
    try {
        const user = await Register.findById(id);
       const accessToken = await user.generatedAccessToken()
       const refreshToken = await user.generatedRefreshToken()

       user.refreshToken = refreshToken;
       user.save({validateBeforeSave:false})
       return {accessToken,refreshToken}
        
    } catch (error) {
        console.log('Something went wrong while generating referesh and access token',error.message);
    }
}