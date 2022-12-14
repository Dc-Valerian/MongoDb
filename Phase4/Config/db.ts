import mongoose from "mongoose";

const URI = "mongodb://localhost/GamingCenter"

mongoose.connect(URI)

mongoose.connection.on(
    "open", () =>{
        console.log("Database connected to the server")
    }
).once(
    "error", (error) =>{
        console.log("An error occured in the connection")
    }
)