import epxress from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
const app = epxress();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// form data
app.use(express.json({ limit: "16kb" }));

// url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// static public folder
app.use(express.static("public"));

app.use(cookieParser())

// // ROUTER 
// import userRouter from "./routes/user.routes.js" 


// // routes declaration

// app.use("/api/v1/users",userRouter)

export {app};
