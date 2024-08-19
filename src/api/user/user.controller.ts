import express, {Request, Response} from "express";
import {getUser} from "./user.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await getUser(id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
