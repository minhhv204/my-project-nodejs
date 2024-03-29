import mongoose from "mongoose";

// connect db mongo
export const connectMongoDB = async (DB_URI) =>{
  try {
    // use mongoose: npm i mongoose
    //mongodb://127.0.0.1:27017/db_name
    await mongoose.connect(DB_URI);
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

