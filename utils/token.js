import jwt from 'jsonwebtoken'
import ConfigLite from 'config-lite';

const config = ConfigLite(__dirname, '..')
const signKey = config.key

export const generateToken = (username, userid) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(
      {
        name: username,
        id: userid
      },
      signKey,
      {
        expiresIn: '1day'
      }
    )
    resolve(token)
  })
}

export const vertifyToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(jwt.verify(token, signKey))
    } catch (error) {
      reject(error)
    }
  })
}
