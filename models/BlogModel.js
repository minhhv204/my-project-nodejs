import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    author: { type: String },
    createdAt :{ type: Date},
    updatedAt :{ type: Date},
    views: { type: String },
    likes: { type: String },
    comments: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
