'use strict';

module.exports = {
  port: parseInt(process.env.PORT, 10) || 8001,
  //mongodb://[username:password@]host:port/database[?options]
  //默认port为27017
  url: 'mongodb://localhost:27017/blog',
  key: 'qq3220860374wx1357662425',
  iv: 'f710b45f04e37709'
}