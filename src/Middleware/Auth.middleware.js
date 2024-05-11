import jwt from "jsonwebtoken"
import { Register } from "../Model/Users/Register.model.js"
export const verifyUser = async(req,res,next)=>{
    try {
        const token = req.cookies?.refreshToken || req.header("Authorization")?.replace("Bearer ","")
        // req.header("Authorization")?.replace("Bearer ","")
        // req.headers.authorization.split(" ")[1]  get token
         if(!token){
            return res.send({message:"Unauthorized request"})
         }

         const decodedToken = await jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)
         const user = await Register.findById(decodedToken?._id).select("-password -refreshToken")
         if(!user){
            return res.send({message:"Invalid AccessToken"})
         }
      
         req.user = user;
         next()
        
    } catch (error) {
       return res.send({message:"jwt error",error:error.message}) 
    }
}