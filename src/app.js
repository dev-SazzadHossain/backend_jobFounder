import  express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import rootRoute from "./Routes/RootRoute.js"
const app = express()


// middleware 
 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"*",credentials:true}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))


// use route 
app.use(rootRoute)



export default app;