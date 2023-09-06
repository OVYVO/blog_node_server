import expressJwt from 'express-jwt'
import Token from '../../utils/token'
import ConfigLite from 'config-lite';

const config = ConfigLite(__dirname, '..')
const signKey = config.key

const interceptor = async (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) return next()
  try {
    const verData = await Token.vertifyToken(token)
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
    path: [...config.whiteListApi]
  }))
}