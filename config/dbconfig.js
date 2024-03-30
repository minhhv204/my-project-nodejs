import mongoose from "mongoose";

// connect db mongo
export const connectMongoDB = async (DB_URI) =>{
  try {
    // use mongoose: npm i mongoose
    //mongodb://127.0.0.1:27017/db_name
    await mongoose.connect("mongodb+srv://minhhv204:0394494851@cluster0.bdiders.mongodb.net/db_nodejs?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

