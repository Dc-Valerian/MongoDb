import express, { Application, Request, Response } from "express";

import router from "./Router/gameRouter";

const PORT: number = 2525;

require("./Config/db");

const app: Application = express();

app.use(express.json());

app.use("/api", router)

app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "Server is up and running"
    })
});

app.listen(PORT, () =>{
    console.log("")
    console.log(`Listening to my port: ${PORT}`)
})