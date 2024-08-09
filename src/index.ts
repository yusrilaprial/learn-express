import "dotenv/config";
import express from "express";
import cors from "cors";
import apiController from "./api/api.controller";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api", apiController);

app.listen(port, () => {
  console.log(`App Listen To Port: ${port}`);
});
