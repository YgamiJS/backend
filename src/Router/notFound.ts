import express, { Request, Response } from "express";

export const notFound = async (req: Request, res: Response) => {
  res.sendStatus(404);
};
