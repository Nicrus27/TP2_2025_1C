import { Router } from "express";
import ProductControllers from "../controllers/ProductControllers.js";

const productRouter = Router();

const productControllers = new ProductControllers();


productRouter.get("/", productControllers.getAllProducts);

productRouter.get("/:mail", productControllers.getAllBoughtProducts);

productRouter.post("/", productControllers.buyProduct); 

//productRouter.delete("/", productControllers.deleteProductFromUser);


export default productRouter;