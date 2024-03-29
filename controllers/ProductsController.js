import Product from "../models/ProductModel.js";
import { registerProduct } from "../validations/product.js";

class ProductsController {
  // GET '/'
  async getAllProducts(req, res) {
    try {
      const products = await Product.find().populate("category");
      res.status(200).json({
        message: "Get All Products Done",
        data: products,
      });
    } catch (error) {
      res.status(400).json({message: error});
    }
   
  }

  // GET '/:id'
  async getProductsDetail(req, res) {
    try {
      const products = await Product.findById(req.params.id).populate("category");
      if (!products) {
        return res.status(404).json({
          message: "Product Not Found",
        });
      }
      res.status(200).json({
        message: "Get Product Detail Done",
        data: products,
      });
     } catch (error) {
      res.status(400).json({message: error})
     }
  }

  // POST '/'
  async creatProduct(req, res) {
    // Model.create({data})

    const { error } = registerProduct.validate(req.body);
      if (!error) {
        console.log(222);
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
          
        });
      }
    try {
      const products = await Product.create(req.body);
      res.status(200).json({
        message: "Create Product Done",
        data: products,
      });
     } catch (error) {
      res.status(400).json({message: error.message})
     }
  }

  // PUT '/:id'
  async updateProduct(req, res) {
    try {
      const products = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true,});
      if (!products) {
        return res.status(404).json({
          message: "Product Not Found",
        });
      }
      res.status(200).json({
        message: "Update Product Done",
        data: products,
      });
     } catch (error) {
      res.status(400).json({message: error.message})
     }
  }

  // DELETE '/:id'
  async deleteProduct(req, res) {
    try {
      const products = await Product.findByIdAndDelete(req.params.id);
      if (!products) {
        return res.status(404).json({
          message: "Product Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Product Done",
        data: products,
      });
     } catch (error) {
      res.status(400).json({message: error})
     }
  }
}

export default ProductsController;