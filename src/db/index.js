import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBConnect = async () => {
    try {
    const ConnectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST ${ConnectionInstance}`)
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED",error)
        process.exit(1)
    }
}

export default DBConnect;