// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connentDB from "./db/index.js";
import app from './app.js';


dotenv.config({
    path: './env'
})

connentDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!!", err)
})






















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