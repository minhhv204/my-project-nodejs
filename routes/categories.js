import express from "express";
import CategorysController from "../controllers/CateController.js";
import {checkPermisson} from "../middlewares/checkPermission.js"
const categoriesRouter = express.Router();

const categorysContrller = new CategorysController();
categoriesRouter.get("/", categorysContrller.getAll);
categoriesRouter.post("/", categorysContrller.createCategorys);
categoriesRouter.get("/:id", categorysContrller.getCategoryDetail);
categoriesRouter.put("/:id", categorysContrller.updateCategorys);
categoriesRouter.delete("/:id",categorysContrller.deleteCategorys);

export default categoriesRouter