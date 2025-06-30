import { Router } from "express";
import userRouter from "./userRoutes.js";

const router = Router();

/*

router.use("/mainpage", )

router.use("/login", )

router.use("/signup", )


*/

router.use("/user", userRouter);

router.use("/", (req, res) => {
    console.log("main");
    res.status(200).send(`
        lista de rutas:
        _ /
        _ /login
        _ /signup
        _ /mainpage
        _ /user

    `)
})



export default router;