import express, { Request, Response } from 'express'

const router = express.Router()

router.post('/user', (req: Request, res: Response) => {
  const body = req.body
  const params = req.params
  //   fs.writeFile('user.json', JSON.stringify(body))
  console.log('body', body.firstName)
  console.log('params', params)
  res.send('user created')
})

router.put('/user/:userId', (req: Request, res: Response) => {
  const userId = req.params.userId
  console.log('userId', userId)
  res.send('updated')
})

export default router
