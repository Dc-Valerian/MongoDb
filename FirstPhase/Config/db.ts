import mongoose from "mongoose";

const URI: string = "mongodb://localhost/carDB";

mongoose.connect(URI);

mongoose.connection.on("open", () => {
    console.log("Database Connected");
})
.once("error", (error) =>{
    console.log(`Failed to connect to the database \n ${error}`);
})