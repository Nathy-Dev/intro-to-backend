import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"      // how to load the .env file
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("Error starting the server:", error);
            throw error;
        });

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
        })
    } catch (error) {
        console.log("Failed to start the server:", error);
        process.exit(1);
    }
}

startServer();