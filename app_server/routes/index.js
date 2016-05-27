
//require brings in anything that was exported
var express = require('express');
var router = express.Router();

//explicitly path to controller .. goes up a level and then we can go to the main
var controller = require('../controllers/main');

router.get('/', controller.index);
//build routes
// '/' is index
router.get('/home', controller.index);

router.get('/submitform', controller.submitform);

router.post('/create', controller.create);

router.post('/delete', controller.delete);

router.post('/edit', controller.edit);

router.post('/update', controller.update);

router.get('/orderbycategory', controller.orderbycategory);


module.exports = router;
