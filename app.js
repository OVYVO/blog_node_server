import './utils/db';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'
import multer from 'multer'

import cros from './utils/cros';
import interceptors from './utils/interceptors'
import router from './routes/index.js';
import logger from './utils/logger'
// import error from './utils/error'

let app = express();
let objMulter = multer({dest: 'public/images'})

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use('/images',express.static('./public/images'));
// 跨域处理
cros(app)
// 拦截器
interceptors(app)
// 请求参数插件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(objMulter.any())

// 路由挂载
router(app)
// 日志输出
logger(app)
//错误反馈
// error(err)

module.exports = app;