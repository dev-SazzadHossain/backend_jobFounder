import { AddJob } from "../Model/AddJob/AddJob.model.js"
import { Category } from "../Model/Category/Category.model.js"

export const jobCountController =async(req,res)=>{
    try {
        const allCategory = await Category.find({})
        const allJobs= await AddJob.find({categoryId:allCategory.map(category=>category?._id)})
        console.log(allJobs);
        
    } catch (error) {
      return res.send({error:error.message})  
    }
}