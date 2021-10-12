'use strict';
import user from './user'
import upload from './upload'

export default app => {
  app.use(user),
  app.use(upload)
}