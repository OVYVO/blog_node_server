export default (err, req, res, next) => {
  console.log('==========')
  console.log(err.message)
  console.log('==========')
  res.status(401).send(err.message)
  // switch (err.status) {
  //   case 401: {
  //     res.status(401).send('token失效')
  //     break
  //   }
  // }
}