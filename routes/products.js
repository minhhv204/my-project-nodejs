import express from "express";
import ProductsController from "../controllers/ProductsController.js";
import { checkPermisson } from "../middlewares/checkPermission.js";
const productRouter = express.Router();

const productContrller = new ProductsController();
productRouter.get("/", productContrller.getAllProducts);
productRouter.post("/", checkPermisson, productContrller.creatProduct);
productRouter.get("/:id", productContrller.getProductsDetail);
productRouter.put("/:id", checkPermisson,productContrller.updateProduct);
productRouter.delete("/:id",checkPermisson, productContrller.deleteProduct);


export default productRouter