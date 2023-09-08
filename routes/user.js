const express = require('express');
const router = express.Router();
import User from '../controller/user'

router.post('/login', User.login);
// router.get('/login',(req,res,next)=>{
  // setTimeout(()=>{
  // next(new Error('错误'))
  // },1000)
  // res.send('哈哈哈哈哈哈哈')
// })
// router.post('/register', User.register);

module.exports = router;