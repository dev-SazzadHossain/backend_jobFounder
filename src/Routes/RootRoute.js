import express from "express"
import mainRoute from "./MainRoute.js";
const rootRoute = express.Router()

rootRoute.use(process.env.API,mainRoute)


export default rootRoute;