// const express = require('express')
// const router = express.Router()

import userRouter from './user'
import uploadRouter from './upload'
import articleRouter from './article'

// router.use()

export default app => {
  // TODO 路由中间件
  app.use(userRouter),
  app.use(uploadRouter),
  app.use(articleRouter)
}