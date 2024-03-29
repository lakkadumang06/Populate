var express = require('express');
var router = express.Router();

var category = require('../controller/categorycontroller');

router.post('/', category.insert_category);
router.get('/', category.get_category);



module.exports = router;