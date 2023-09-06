import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import multer from 'multer' // 处理multipart/form-data表单数据

import './utils/db'
// import cros from './middleware/cros';
// import interceptors from './middleware/interceptors'
// import router from './routes/index.js';
// import logger from './utils/logger'
// import error from './utils/error'

let app = express();
//设置文件保存目录
let objMulter = multer({dest: 'public/images'})
//静态资源管理
app.use('/images',express.static('./public/images'));
// 跨域处理
// cros(app)
// 请求参数插件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(objMulter.any())
// 路由挂载
// router(app)
// 日志输出
// logger(app)
//错误反馈
// error(err)

module.exports = app;