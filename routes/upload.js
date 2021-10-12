var express = require('express');
var router = express.Router();
import Upload from '../controller/upload'


router.post('/uploadfile', Upload.uploadFile);

module.exports = router;