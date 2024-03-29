import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { 
      type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
     },
    image: { type: String, required:true },
    stockQuantity: { type: String },
    variants: { type: String },
    price: { type: Number },
    rate: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
