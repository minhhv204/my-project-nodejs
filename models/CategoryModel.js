import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    // description: { type: String },
    // products: { type: String },
    // image: { type: String },
    // blogs: { type: String },
    // slug: { type: String },
  
  },
  { timestamps: true, versionKey: false }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
