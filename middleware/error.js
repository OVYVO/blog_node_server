export default (err, req, res, next) => {
  switch (err.status) {
    case 401: {
      res.status(401).send('token失效');
      break;
    }
  }
}

// export default (app) => {
//   app.use(errHandlle)
// }