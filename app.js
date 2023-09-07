import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import multer from 'multer' // 处理multipart/form-data表单数据

// import './utils/db'

import crosMiddleware from './middleware/cros'
import tokenMiddleware from './middleware/token'
import errMiddleware from './middleware/error'
import logMiddleware from './middleware/log'
import roterMiddleware from './routes/index'

let app = express();
//静态资源
// let objMulter = multer({dest: 'public/images'})
// app.use('/images',express.static('./public/images'))
// app.use(objMulter.any())
// 中间件
// app.all('*',crosMiddleware)
// app.use(tokenMiddleware)
// app.use(bodyParser.urlencoded({ extended: false }))
// app.get('/aaa',(req,res)=>{
//   throw new Error(JSON.stringify({status: 401}))
// })
app.use(roterMiddleware(app))

// app.use(logMiddleware)
app.use(errMiddleware)

module.exports = app