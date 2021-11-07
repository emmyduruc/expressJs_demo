"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controllers/userController");
var router = express_1.default.Router();
// Every path we define here will get /api/v1/movies prefix
router.post('/', userController_1.createUser);
exports.default = router;
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
