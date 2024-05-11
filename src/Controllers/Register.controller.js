import { Register } from "../Model/Users/Register.model.js";

export const registerController = async (req,res)=>{
    try {
        const {name,email,password}=req.body;

        if([name,email,password].some(filed=>filed.trim() == "")){
            return res.send({error:"all filed are required"})
        }

        const findUser = await Register.findOne({
            $or:[{name},{email}]
        })
        if(findUser){
            return res.send({error:"Already Have An Account"})
        }

        const userSave = new Register({
            name,
            email,
            password
        })

        const store = await userSave.save({validateBeforeSave:false});
        const user = await Register.findById(store._id).select("-password -refreshToken")

        if(!user){
            return res.send({error:"Something went wrong while registering the user"})
        }
         res.status(200).send({
            success:true,
            message:"Register User Successfully",
            user,

         })
    } catch (error) {
        console.log(error.message);
    }
}