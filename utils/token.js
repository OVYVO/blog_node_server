import jwt from 'jsonwebtoken'
import ConfigLite from 'config-lite';

const config = ConfigLite(__dirname, '..')
const signKey = config.key

const setToken = (username, userid) => {
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

const verToken = (token) => {
  return new Promise((resolve, reject) => {
    const vertifyToken = jwt.verify(
      token,
      signKey
    );
    resolve(vertifyToken)
  })
}

export default { setToken, verToken }