import mongoose from "mongoose";

// connect db mongo
export const connectMongoDB = async () =>{
  try {
    // use mongoose: npm i mongoose
    //mongodb://127.0.0.1:27017/db_name
    //mongodb+srv://hminh0555:<password>@cluster0.hkor2zg.mongodb.net/
    //mongodb+srv://hminh0555:0394494851@cluster0.hkor2zg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    await mongoose.connect("mongodb+srv://hminh0555:0394494851@cluster0.hkor2zg.mongodb.net/db_nodejs?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

