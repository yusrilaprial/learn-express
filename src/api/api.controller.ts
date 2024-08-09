import express, {Request, Response} from "express";
import productController from "./product/product.controller";
import userController from "./user/user.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => res.send("Hello World!"));
router.use("/product", productController);
router.use("/user", userController);

export default router;
