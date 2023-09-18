import expressJwt from 'express-jwt'
import { vertifyToken } from '../utils/token'
import ConfigLite from 'config-lite'

const config = ConfigLite(__dirname, '..')

export default expressJwt({
  secret: config.key,
  algorithms: ["HS256"],
  credentialsRequired: false,
  requestProperty: 'auth',
  getToken: (req) => {
    if (req.headers.authorization?.split(" ")[0] === "Bearer"){
      return req.headers.authorization.split(" ")[1]
    }else if(req.query && req.query.token) {
      return req.query.token
    }else if(req.headers.authorization){
      return req.headers.authorization
    }else{
      return null
    }
  },
  onExpired: async (req, err) => {
    if(new Date() - err.inner.expiredAt < 1000*60*60*24) return
    throw err
  }
}).unless({
  path: [...config.whiteListApi]
})
