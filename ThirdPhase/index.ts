import express, { Application, Request, Response } from "express";

import router from "./Router/storeRouter";

const PORT = 2023;
require("./Config/database")

const app: Application = express();

app.use(express.json());

app.use("/api", router)

app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "Server successfully created"
    })
});

app.listen(PORT, () =>{
    console.log("Database connected to server")
})