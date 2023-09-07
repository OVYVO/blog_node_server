import morgan from 'morgan';
import FileStreamRotator from 'file-stream-rotator'
import fs from 'fs'
import path from 'path'

// 创建log文件夹
const logDirectory = path.join(__dirname, '..', 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// 根据时间拆分文件
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, '%DATE%.log'),
  frequency: 'daily',
  verbose: false
})

morgan.format('joke', `:method :url :req[header] :status :response-time ms`);
export default const logMiddleware = morgan('joke', {
  stream: accessLogStream,
  skip: function (req, res) {
    return res.statusCode < 400
  }
})