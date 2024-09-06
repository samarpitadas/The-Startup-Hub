import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
async function connectdbs() {
    // const conn = await mongoose.connect("mongodb+srv://raj902121raj:rahulpandit123@database.ox2us.mongodb.net/")
    const conn = await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}`)

}

export { connectdbs }