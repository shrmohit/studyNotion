const { register } = require('../controllers/auth/login.controller.js');
const express = require('express');

const router = express.Router();

router.post('/register', register);

module.exports = router;
