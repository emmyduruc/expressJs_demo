import express from "express";

import {
  createUser,
  login,
  updateUser,
  findAllUser,
  findUserById,
  adminCheck,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

// Every path we define here will get /api/v1/movies prefix

router.post("/", createUser);
router.get("/", findAllUser);
router.post("/", adminCheck);
router.post("/login", login);
router.put("/:userId", updateUser);
router.get("/:userId", findUserById);
router.get("/:userId", deleteUser);

export default router;

// import express, { Request, Response } from 'express'

// const router = express.Router()

// router.post('/user', (req: Request, res: Response) => {
//   const body = req.body
//   const params = req.params
//   //   fs.writeFile('user.json', JSON.stringify(body))
//   console.log('body', body.firstName)
//   console.log('params', params)
//   res.send('user created')
// })

// router.put('/user/:userId', (req: Request, res: Response) => {
//   const userId = req.params.userId
//   console.log('userId', userId)
//   res.send('updated')
// })

// export default router
