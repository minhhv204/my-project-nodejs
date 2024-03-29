import authRouter from "./auth.js";
import blogsRouter from "./blogs.js";
import bookRouter from "./books.js";
import categoriesRouter from "./categories.js";
import productsRouter from "./products.js";

export default function routes(app){
    app.use("/books",bookRouter);
    app.use("/blogs",blogsRouter);
    app.use("/categories",categoriesRouter);
    app.use("/product",productsRouter);
    app.use("/auth",authRouter);
}