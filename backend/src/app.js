import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// form data
app.use(express.json({ limit: "16kb" }));

// url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// static public folder
app.use(express.static("public"));


app.use(cookieParser())

// ROUTER 
import userRouter from "./routes/user.routes.js" 
// routes declaration
app.use("/api/v1/users",userRouter)

import ticTacRoute from "./routes/ticTac.routes.js"
app.use("/api/v1/tictactoe", ticTacRoute);

export {app};
