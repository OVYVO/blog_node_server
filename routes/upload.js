const express = require('express');
const router = express.Router();
import Upload from '../controller/upload'


router.post('/uploadfile', Upload.uploadFile);

module.exports = router;