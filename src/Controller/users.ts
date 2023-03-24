import express, { Request, Response } from "express";
import { model } from "../Model";

export const Users = {
  async getUsers(req: Request, res: Response) {
    res.json(await model.Users.getUsers(req, res));
  },

  async getUser(req: Request, res: Response) {
    res.json(await model.Users.getUser(req, res));
  },

  async setUser(req: Request, res: Response) {
    if (req.body.email && req.body.username && req.body.password) {
      res.json(await model.Users.setUser(req, res));
    }

    return;
  },
};
