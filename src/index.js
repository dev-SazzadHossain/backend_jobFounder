import app from "./app.js";
import dotenv from "dotenv"
import colors from "colors"
import { dbConnection } from "./db/dbConnection.js";

dotenv.config({
    path:"./.env"
})
dbConnection().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running PORT: ${process.env.PORT}`.white.bgBlue)
    })
}).catch(err=>console.log(err.message))

