import express from 'express';
import {Router} from "express";
import { connectMongoDB } from "./config/dbconfig.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import productRouter from './routes/products.js';
import bookRouter from './routes/books.js';
import categoriesRouter from './routes/categories.js';
const router = Router();
dotenv.config();
const app = express();
app.use(express.json()); // cho JSON payloads
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true })); // cho URL-encoded payloads
connectMongoDB("mongodb+srv://minhhv204:0394494851@cluster0.bdiders.mongodb.net/db_nodejs?retryWrites=true&w=majority&appName=Cluster0");
app.use("/books",bookRouter);
app.use("/auth",authRouter);
app.use("/product",productRouter);
app.use("/category",categoriesRouter);
app.use("/",productRouter)
app.listen(PORT, ()=> console.log("Server is running on port 3000"));