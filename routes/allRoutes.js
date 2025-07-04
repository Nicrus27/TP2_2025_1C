import { Router } from "express";
import userRouter from "./userRoutes.js";
import productRouter from "./productRoutes.js";

const router = Router();


router.use("/user", userRouter);

router.use("/prod", productRouter);




export default router;