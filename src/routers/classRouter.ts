import express, { Request, Response } from 'express'

import ClassModel from '../models/Class'
import StudentModel from '../models/Student'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const data = req.body

    const newClass = new ClassModel({
      name: data.name,
      startDate: data.startDate,
      students: [],
      modules: [],
    })

    const result = await newClass.save()
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

router.put(
  '/:classId/enrol/:studentId',
  async (req: Request, res: Response) => {
    try {
      const classId = req.params.classId
      const studentId = req.params.studentId

      const foundClass = await ClassModel.findById(classId)
      const foundStudent = await StudentModel.exists({ _id: studentId })

      if (!foundStudent) {
        return res.status(404).send('student not found')
      }

      if (!foundClass) {
        return res.status(404).send('class not found')
      }

      foundClass.students.push(studentId)
      const updated = await foundClass.save()
      res.json(updated)
    } catch (error) {}
  }
)

router.get('/', async (req: Request, res: Response) => {
  const allClasses = await ClassModel.find().populate('students')
  res.json(allClasses)
})

export default router