import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";

const userRouter = Router();

const userControllers = new UserControllers();


userRouter.get("/", userControllers.getAllUsers);

userRouter.get("/:id", userControllers.getUserById); 

userRouter.post("/", userControllers.createUser); 

userRouter.put("/", userControllers.updateUser);

userRouter.get("/del", userControllers.deleteUser);

userRouter.post("/login", userControllers.login)



export default userRouter;