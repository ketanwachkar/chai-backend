// require("dotenv").config({path: './env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";


import dotenv from "dotenv"
import DBConnect from "./db/index.js";

dotenv.config({ path: './env'})

DBConnect()
/*
const app = express;
;(async() => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("Error",(error) => {
        console.log("Error:", error)
        throw error
      })
      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
      })
    } catch (err) {
        console.error("ERROR",err)
        throw err
    }
})()
    */