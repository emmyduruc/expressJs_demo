import express, { Request, Response } from "express";
import { connect } from "mongoose";
import Helmet from "helmet"
import morgan from "morgan";
import userRouter from "./routers/user";
import postRouter from "./routers/postRouter";
import authentication from "./middlewares/authentication";


connect("mongodb://localhost:27017/social_media")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log(` MongoDB failed to connect: ${error}`);
  });

  
const app = express();
app.use(express.json());
app.use(Helmet());
// app.use(morgan("common"));
// app.use(authentication);
// app.use("/students",logger);


app.use("/user", userRouter);
app.use("/api/post", postRouter);


app.listen(8800, () => {
  console.log("Server is running on 8800");
});
