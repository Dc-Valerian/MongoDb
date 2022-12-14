import mongoose from "mongoose";

const URI = "mongodb://localhost/StoreDB"

mongoose.connect(URI);

mongoose.connection.on(
    "open", () =>{
        console.log("Database has been connected to the database")
    }
).once(
    "error", (error) =>{
        console.log("An error created. Database not created", error)
    }
)