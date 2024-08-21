// require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import DB_NAME from "./constants.js";
import connectDB from "./database/db.js";
import { app } from "./app.js";




connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongo DB Connection Failed",err);
});

