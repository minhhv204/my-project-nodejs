import express from "express";
const blogsRouter = express.Router();

blogsRouter.get("/",(req,res)=>{
    res.send("blogs list");
});
blogsRouter.get("/",(req,res)=>{
    res.send("Add blog");
});
blogsRouter.get("/:id",(req,res)=>{
    res.send("blog Id");
});
blogsRouter.put("/:id",(req,res)=>{
    res.send("blog Update");
});
blogsRouter.delete("/:id",(req,res)=>{
    res.send("blog Delete");
});

export default blogsRouter