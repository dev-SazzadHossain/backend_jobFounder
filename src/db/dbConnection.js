import mongoose from "mongoose";

export const dbConnection = async ()=>{
    try {
        const dbResponse = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_PROJECT_NAME}`)
        if(dbResponse){
            console.log(`dbConnect SuccessFully:${dbResponse.connection.host}`.bgMagenta.white);
        }
        
    } catch (error) {
        console.log(`dbConnection Failed:----${error.message}`);
    }
}