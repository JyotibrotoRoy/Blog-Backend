import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectionDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\nMongoDB connected !! HOST ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("\nnMongoDB error...", error);
        process.exit(1);
    }
}

export default connectionDB;