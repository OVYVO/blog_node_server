'use strict';
import user from './user'
import upload from './upload'
import article from './article'

export default app => {
  app.use(user),
  app.use(upload),
  app.use(article)
}