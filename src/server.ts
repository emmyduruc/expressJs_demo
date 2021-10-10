import express, { Request, Response } from "express";
import { connect } from "mongoose";

import userRouter from "./routers/user";
import studentRouter from "./routers/students";
import classRouter from "./routers/classRouter";
import authentication from "./middlewares/authentication";

connect("mongodb://localhost:27017/students-data")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log(` MongoDB failed to connect: ${error}`);
  });

  
const app = express();
app.use(express.json());

// app.use(authentication);
// app.use("/students",logger);

app.use("/students", studentRouter);
app.use("/users", userRouter);
app.use("/class", classRouter);

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
