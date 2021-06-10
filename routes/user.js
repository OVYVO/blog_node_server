var express = require('express');
var router = express.Router();
import User from '../controller/user'


router.post('/login', User.login);
router.post('/register', User.register);

module.exports = router;