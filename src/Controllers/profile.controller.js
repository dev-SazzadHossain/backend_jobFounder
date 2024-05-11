import { uploadImage } from "../Middleware/Cludinary.middleware.js"
import { Register } from "../Model/Users/Register.model.js"

export const profilePicController = async(req,res)=>{
    try {
        const path = req.file?.path
        if(!path){
            return res.send({error:"file missing"})
        }

        // upload file cludinary
        const response = await uploadImage(path)
        if(!response?.url){
            return res.send({error:"upload filed try again"})
        }

         await Register.findOneAndUpdate(req?.user?._id,{
            $set:{
                profileUrl:response?.url,
            }
        },{new:true}).select("-refreshToken -password")
        return res.status(200).send({success:true,message:"Profile Change Successfully"})
        
    } catch (error) {
       return res.send({error:error.message}) 
    }
}

export const currentUser = async(req,res)=>{
    try {
        const user = await Register.findById(req?.user?._id)
        if(!user){
            return res.send({error:"Invalid User"})
        }
        return res.status(200).send({success:true,data:user})
        
    } catch (error) {
        return res.send({error:error.message})
    }
}

export const updateUserInfo = async(req,res)=>{
    try {
        const {name,email}=req.body;
       if([name,email].some(filed=>filed.trim()=="")){
        return res.send({error:"all filed are required"})
       }
       await Register.findOneAndUpdate(req?.user?._id,{
        $set:{
            name:name,
            email:email
        }
    },{new:true})

    return res.status(200).send({success:true,message:"User Info Updated"})
        
    } catch (error) {
        return res.send({error:"error"})
    }
}

export const userPasswordChange = async(req,res)=>{
    try {
        const {oldPassword,newPassword}=req.body;
        const user = await Register.findById(req?.user?._id)
        if(!user){
            return res.send({error:"Invalid User Access"})
        }
        const checkPassword = await user.isPasswordCorrect(oldPassword)
        if(!checkPassword){
            return res.send({error:"Password Wrong"})
        }
        // update password
       user.password = newPassword;
       await user.save({validateBeforeSave:false})
       return res.status(200).send({success:true,message:"Password Changed Successfully"})
        
    } catch (error) {
        return res.send({error:error.message})
    }
}