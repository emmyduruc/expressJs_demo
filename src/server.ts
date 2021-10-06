import express, { Request, Response } from "express";

import userRouter from "./routers/user";
import studentRouter from "./routers/students";
import authentication from "./middlewares/authentication";

const app = express();
app.use(express.json());

app.use(authentication)
// app.use("/students",logger);

app.use("/students", studentRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
