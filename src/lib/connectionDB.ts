import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_URL || "mongodb://localhost:27017/sebasDB";

export const db = mongoose.connect(connectionString)
                            .then(() => console.log("Connected to MongoDB"))
                            .catch((error) => console.log("Error connecting to MongoDB", error));