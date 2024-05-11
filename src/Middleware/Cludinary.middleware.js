import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: 'dtjwqfc15', 
  api_key: '526783659474749', 
  api_secret: 'mQw7nWZkyYMD22An1twkKqQyIFc' 
});


export const uploadImage = async(path)=>{
    try {
        if(!path) return null;
    const response = await cloudinary.uploader.upload(path,{resource_type:"auto"})
    if(response){
        if(fs.existsSync(path)){

            fs.unlinkSync(path)
        }
        return response;
    }
    } catch (error) {
        if(fs.existsSync(path)){

            fs.unlinkSync(path)
        }
        return null;
    }

  
}