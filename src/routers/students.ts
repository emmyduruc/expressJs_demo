import express, { Request, Response } from "express";
import logger from "../middlewares/logger";
import authentication from "../middlewares/authentication";

import StudentModel from '../models/Student'

const router = express.Router();

// router.use(logger)



// POST /students
router.post('/', async (req: Request, res: Response) => {
  try {
    const data = req.body

    const newStudent = new StudentModel({
      firstName: data.firstName,
      lastName: data.lastName,
      classes: [],
    })

    const result = await newStudent.save()
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

router.get('/', async (req: Request, res: Response) => {
  const studentList = await StudentModel.find()
  res.json(studentList)
})

router.delete('/:studentId', async (req: Request, res: Response) => {
  const studentId = req.params.studentId
  // const deleted = await StudentModel.deleteOne({ firstName: 'john' })
  const deleted = await StudentModel.findByIdAndDelete(studentId)

  res.json(deleted)
})

router.put('/:studentId', async (req: Request, res: Response) => {
  const studentId = req.params.studentId
  const updateData = req.body
  const updated = await StudentModel.findByIdAndUpdate(studentId, updateData, {
    new: true,
    runValidators: true,
  })
  res.json(updated)
})


// GET /students/:studentId
router.get("/:studentId", (req: Request, res: Response) => {
  console.log("params", req.params);
  res.send("getting students");
});

export default router;
