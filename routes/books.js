import express from "express";
import BooksController from "../controllers/BooksController.js";
import {checkPermisson} from "../middlewares/checkPermission.js"
const bookRouter = express.Router();

const booksContrller = new BooksController();
bookRouter.get("/", booksContrller.getAllBooks);
bookRouter.post("/", checkPermisson, booksContrller.createBook);
bookRouter.get("/:id", booksContrller.getBookDetail);
bookRouter.put("/:id", checkPermisson, booksContrller.updateBook);
bookRouter.delete("/:id",checkPermisson, booksContrller.deleteBook);

export default bookRouter