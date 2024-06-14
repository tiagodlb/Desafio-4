import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const authRouter = Router();

//authRouter.post("/signup", validateSchemaMiddleware(signUpSchema),);
//authRouter.post("/signin", validateSchemaMiddleware(signInSchema),);

export default authRouter;