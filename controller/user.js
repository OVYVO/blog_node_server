'use strict';
import UserModel from '../models/user'
import BaseComponent from '../protype/baseComponent'
import Token from '../utils/token'

class User extends BaseComponent {
  constructor() {
    super()
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }
  async login(req, res, next) {
    const { user_name, user_psd } = req.body
    const { _doc: userInfo } = await UserModel.findOne({
      'user_name': user_name,
      'user_psd': this.decrypt(user_psd)
    }) || {}
    if (!userInfo) return res.send({ errCode: 0, message: '登陆失败,请检查用户名及密码是否正确' })
    const token = await Token.setToken(userInfo.user_name, userInfo._id)
    const user_info = {
      "user_id": userInfo._id,
      "user_name": userInfo.user_name,
      "user_token": token,
      "create_date": userInfo.create_date
    }
    res.send({
      errCode: 200,
      success: '登录成功',
      user_info
    })
  }
  async register(req, res, next) {
    const { user_name, user_psd } = req.body
    const reqObj = {
      user_name,
      user_psd: this.decrypt(user_psd),
      create_date: Date.now()
    }
    this.validate(reqObj, res)
    const { _doc: userInfo } = await UserModel.findOne({ user_name }) || {}
    if (userInfo) return res.send({ errCode: 0, message: '当前用户名已经存在' })
    try {
      await UserModel.create(reqObj)
      res.send({
        errCode: 200,
        message: '注册成功'
      })
    } catch (error) {
      res.send({
        errCode: 0,
        message: '注册失败'
      })
    }
  }
  validate(obj, res) {
    try {
      Object.keys(obj).forEach(k => {
        if (!obj[k]) {
          res.send({ errCode: 0, message: `${k}不能为空` })
          throw new Error('endForEach')
        }
      });
    } catch (err) {
      if (err.message != 'endForEach') throw err
    }
  }
}

export default new User()