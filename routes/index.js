import express from 'express'
import errMiddleware from '../middleware/error'
import userRouter from './user'
import uploadRouter from './upload'
import articleRouter from './article'

export default (app) => {
  return (req,res,next)=>{
    // cookie解析插件
    app.use(express.urlencoded({extends:false})) //Content-Type: application/x-www-form-urlencoded
    app.use(express.json()) //Content-Type: application/json
    app.use('/api/user',userRouter)
    app.use(uploadRouter),
    app.use(articleRouter)
    app.use((req,res)=>{
      res.status(404).send('路由不存在')
    })
    app.use(errMiddleware)
  }
}