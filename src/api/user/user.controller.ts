import express, {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await prisma.user.findFirst({where: {id}});
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
