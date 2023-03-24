import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Users = {
  async getUsers(req: Request, res: Response) {
    const users = prisma.user.findMany();

    return users;
  },

  async getUser(req: Request, res: Response) {
    const user = prisma.user.findUnique({
      where: {
        id: +req.params.id,
      },
    });

    return user;
  },

  async setUser(req: Request, res: Response) {
    const user = prisma.user.create({
      data: {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      },
    });

    return user;
  },
};
