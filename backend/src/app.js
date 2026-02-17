import express from "express";

// import routes
import userRouter from "./routes/user.route.js";
// import postRouter from "./routes/post.route.js";

// create an express app
const app = express();

// Routes declaration
app.use("/api/v1/users", userRouter)
// app.use("/api/v1/posts", postRouter)

// example route: http://localhost:2000/api/v1/users/register

// pass the json request gotten from the users
app.use(express.json());

export default app;