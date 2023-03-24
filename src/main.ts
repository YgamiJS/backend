import express, { Express } from "express";
import { router } from "./Router/index";
import cors from "cors";
import path from "path";

const HOSTNAME: string = "127.0.0.1";
const PORT: number = 3000;

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.static(path.resolve(__dirname, "View")));

app.listen(PORT, HOSTNAME, () =>
  console.log(`Server start listinig on http://${HOSTNAME}:${PORT}/`)
);
