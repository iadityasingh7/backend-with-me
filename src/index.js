// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connentDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connentDB();






















// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"



// ( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("ERROR", error)
//         throw err
//     }
// })()