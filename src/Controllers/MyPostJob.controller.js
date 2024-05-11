import { AddJob } from "../Model/AddJob/AddJob.model.js"

export const myPostJobController=async(req,res)=>{
    try {
        const jobs = await AddJob.find({whoCreated:req.user?._id})
        return res.status(200).send({success:true,data:jobs})
        
    } catch (error) {
        return res.send({error:error.message})
    }
}