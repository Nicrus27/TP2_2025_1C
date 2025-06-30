import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";

const userRouter = Router();

const userControllers = new UserControllers();

//tengo pensado hacer peticion de info por body, params no a menos que el profe o el tp diga lo contrario

userRouter.get("/", userControllers.getAllUsers);

userRouter.get("/id", userControllers.getUserById);

userRouter.post("/", userControllers.createUser); 

userRouter.put("/", userControllers.updateUser);

userRouter.get("/del", userControllers.deleteUser);





export default userRouter;