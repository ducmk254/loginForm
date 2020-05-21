const express = require('express');

const authController = require('../controllers/auth.controller');

let router = express.Router();

router.get('/',authController.login);
router.post('/',authController.postAuth);

module.exports = router;