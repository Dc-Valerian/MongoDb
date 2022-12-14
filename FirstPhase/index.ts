import express, { Application, Request, Response } from "express";

import router from "./Router/carRouter";

const PORT: number = 2022;

const myServer: Application = express();

require("./Config/db");



myServer.use(express.json());

myServer.get("/", (req: Request, res: Response) =>{
    res.status(200).json({
        message: "Created a running server",
    })
})

myServer.use("/api", router)

myServer.listen(PORT, () =>{
    console.log("Done");
})