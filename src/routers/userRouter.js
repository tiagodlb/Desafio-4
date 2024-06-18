import { Router } from "express"
import { getUserById, getUsers } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/users/:id", getUserById);
userRouter.get("/users", getUsers);

export default userRouter;
