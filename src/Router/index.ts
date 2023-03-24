import express from "express";
import { Users } from "./users";
import { notFound } from "./notFound";

const router = express.Router();

router.use("/users", Users);
router.get("*", notFound);

export { router };
