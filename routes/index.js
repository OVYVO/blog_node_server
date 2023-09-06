const express = require('express');
const router = express.Router();

import user from './user'
import upload from './upload'
import article from './article'

export default app => {
  // TODO 路由中间件
  app.use(user),
  app.use(upload),
  app.use(article)
}