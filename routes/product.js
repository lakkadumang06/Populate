var express = require('express');
var router = express.Router();

var product = require ('../controller/productcontroller');

router.post('/', product.insert_product);
router.get('/', product.get_product);

module.exports = router;