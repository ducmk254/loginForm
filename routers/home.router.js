const express = require('express');

const homeController = require('../controllers/home.controller');

let router = express.Router();

 
router.get('/',homeController.renderHome);

module.exports = router;
 