import express from 'express'
import path from 'path'
import multer from 'multer' // 处理multipart/form-data表单数据

import './utils/db'

import crosMiddleware from './middleware/cros'
import tokenMiddleware from './middleware/token'
import logMiddleware from './middleware/log'
import roterMiddleware from './routes/index'

let app = express();
//静态资源
let objMulter = multer({dest: 'public/images'})
app.use(objMulter.any())
app.use('/images',express.static('./public/images'))
// 中间件
app.all('*',crosMiddleware)
app.use(tokenMiddleware)
app.use(roterMiddleware(app))
// app.use(logMiddleware)

module.exports = app