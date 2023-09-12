'use strict';
import mongoose from 'mongoose';
import ConfigLite from 'config-lite';
import chalk from 'chalk';

const config = ConfigLite(__dirname, '..')
mongoose.set('useCreateIndex', true)
mongoose.connect(config.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: 120
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// 连接成功
db.once('open', () => {
  console.log(chalk.red('===========******连接状态******==========='))
  console.log(chalk.green('MongoDB连接成功'));
})

// 连接失败
db.on('error', function (error) {
  console.error(chalk.red(`MongoDB连接失败: ${error}`));
  mongoose.disconnect();
});

// 断开连接
db.on('close', function () {
  console.log(chalk.red('===========******连接断开，尝试重新连接******==========='));
  mongoose.connect(config.url, { server: { auto_reconnect: true } });
});
