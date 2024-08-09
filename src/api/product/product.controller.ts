import express, {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {Product} from "./product.type";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await prisma.product.findFirst({where: {id}});
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const data: Product = req.body;
    const product = await prisma.product.create({data});
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data: Product = req.body;
    const product = await prisma.product.update({where: {id}, data});
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/price/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const price = parseInt(req.query.price as string);
    if (!Number.isInteger(price)) {
      res.status(422).send("price must be integer: " + price);
      return;
    }
    const product = await prisma.product.update({where: {id}, data: {price}});
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await prisma.product.delete({where: {id}});
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
