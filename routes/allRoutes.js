import { Router } from "express";
import userRouter from "./userRoutes.js";
import productRouter from "./productRoutes.js";

const router = Router();

/*

router.use("/mainpage", )

router.use("/login", )

router.use("/signup", )


*/

router.use("/user", userRouter);
router.use("/prod", productRouter);

/*
router.use("/", (req, res) => {
    //console.log("main");
    res.status(200).send({
        rutas:`
        lista de rutas:
        _ /
        _ /login
        _ /signup
        _ /mainpage
        _ /user

    `
    })
})
*/


export default router;