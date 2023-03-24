import express, { Request, Response } from "express";
import { controller } from "../Controller/index";
import { notFound } from "./notFound";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", setUser);
router.get("*", notFound);

async function getUsers(req: Request, res: Response) {
  controller.Users.getUsers(req, res);
}

async function getUser(req: Request, res: Response) {
  controller.Users.getUser(req, res);
}

async function setUser(req: Request, res: Response) {
  controller.Users.setUser(req, res);
}

export { router as Users };
