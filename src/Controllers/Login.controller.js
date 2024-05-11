import { Register } from "../Model/Users/Register.model.js";
import { generateAccessAndRefreshToken } from "../utils/generateAccessAndRefreshToken.js";
import { options } from "../utils/option.js";

export const loginController = async (req,res)=>{
    try {
        const {email,password}=req.body;
        // check value user
        if([email,password].some(filed=>filed.trim() =="")){
            return res.send({error:"all filed are required"})
        }

        // find user 
        const user = await Register.findOne({email})
        if(!user){
            return res.send({error:"User does not exist"})
        }

        // check password
        const checkPassword = await user.isPasswordCorrect(password)
        if(!checkPassword){
            return res.send({error:"invalid user credentials"})
        }
        // generateToken accessAndRefresh
        const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user?._id)
        

        const store = await user.save({validateBeforeSave:false})
        const response = await Register.findById(store?._id).select("-password -refreshToken")

        return res.cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).send({
            success:true,
            message:"Login SuccessFully",
            refreshToken,
            accessToken,
            user:response
        })

        
    } catch (error) {
       return res.send({error:error.message})
    }
}