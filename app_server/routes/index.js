
//require brings in anything that was exported
var express = require('express');
var router = express.Router();

//explicitly path to controller .. goes up a level and then we can go to the main
var controller = require('../controllers/main');

router.get('/', controller.index);
//build routes
// '/' is index
router.get('/home', controller.index);

module.exports = router;
