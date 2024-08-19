import express, {Request, Response} from "express";
import {Product} from "./product.type";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  updateProductPrice,
  deleteProduct,
  parsePrice,
} from "./product.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await getProduct(id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const data: Product = req.body;
    const product = await createProduct(data);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data: Product = req.body;
    const product = await updateProduct(id, data);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/price/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const price = parsePrice(req.query.price as string);
    const product = await updateProductPrice(id, price);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await deleteProduct(id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
