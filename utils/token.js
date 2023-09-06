import jwt from 'jsonwebtoken'
import ConfigLite from 'config-lite';

const config = ConfigLite(__dirname, '..')
const signKey = config.key

const generateToken = (username, userid) => {
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

const vertifyToken = (token) => {
  return new Promise((resolve, reject) => {
    const result = jwt.verify(
      token,
      signKey
    );
    resolve(result)
  })
}

export default { generateToken, vertifyToken }