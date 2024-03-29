import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRouter = Router();

const authController = new AuthController();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.get("/get", authController.getAll);

export default authRouter;