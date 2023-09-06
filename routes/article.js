var express = require('express');
var router = express.Router();
import Article from '../controller/article'


router.post('/article-add', Article.add);
router.post('/article-list', Article.list)


module.exports = router;