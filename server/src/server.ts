import express from "express";
import { Router } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(Router);

app.listen(3333, () => {
  console.log("server runing");
});
