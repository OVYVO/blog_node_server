const express = require('express');
const router = express.Router();
import User from '../controller/user'


router.post('/login', User.login);
router.post('/register', User.register);

module.exports = router;