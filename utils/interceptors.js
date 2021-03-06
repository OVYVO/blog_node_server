import expressJwt from 'express-jwt'
import Token from './token'
import ConfigLite from 'config-lite';

const config = ConfigLite(__dirname, '..')
const signKey = config.key

let validateUrl = ['/', '/register'];

// 拦截器
const interceptor = async (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) return next()
  try {
    const verData = await Token.verToken(token)
    req.data = verData
  } catch (error) {
    return next()
  }
}

export default app => {
  app.use(interceptor)
  app.set(expressJwt({
    secret: signKey,
    algorithms: ['HS256']
  }).unless({
    path: [...validateUrl]
  }))
}