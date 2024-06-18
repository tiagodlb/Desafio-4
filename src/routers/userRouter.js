import { Router } from "express"
import { getUserById, getUsers } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/users/:id", getUserById);
userRouter.get("/users", getUsers);

export default userRouter;
