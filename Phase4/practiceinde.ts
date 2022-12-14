import mongoose from "mongoose";
import express, { Request, Response } from "express";

const PORT = 4000;

const app = express();

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "successfully created valerian's server",
  });
});

app.listen(PORT, () => {
  console.log("successfully created my server");
});
