'use strict';

import fs from 'fs'
import path from 'path'

class Upload {
  uploadFile(req,res){
    let filepath = req.files[0].path 
    let fileName = req.files[0].filename
    let suffix = path.parse(req.files[0].originalname).ext
    let newName = `${filepath}${suffix}`
    console.log(req.files[0])
    fs.rename(req.files[0].path, newName , (err) => {
        if(err) {
          console.log('重命名失败');
        }else {
          res.send({
            errCode: 200,
            message: '文件上传成功',
            fileInfo:{
              imgUrl: `images/${fileName}${suffix}`
            }
          })
        }
    });
  }
}

export default new Upload()