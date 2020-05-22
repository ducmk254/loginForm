const express = require('express');

const homeController = require('../controllers/home.controller');

let router = express.Router();

router.get('/',homeController.reDirect);
router.get('/home',homeController.index);

module.exports = router;
