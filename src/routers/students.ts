import express, { Request, Response } from "express";
import logger from "../middlewares/logger";
import authentication from "../middlewares/authentication";

const router = express.Router();

router.use(logger)


// POST /students
router.post("/", authentication,(req: Request, res: Response) => {
  res.send("creating student");
});

// GET /students/:studentId
router.get("/:studentId", (req: Request, res: Response) => {
  console.log("params", req.params);
  res.send("getting students");
});

export default router;
