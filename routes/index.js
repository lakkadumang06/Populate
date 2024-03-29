var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller'); 

/* GET home page. */
router.post('/', user.insert);
router.get('/',user.get_data);
router.put('/update_data/:id', user.update_data);
router.delete('/delete_data/:id', user.delete_data);
router.post('/login', user.login);
router.get('/logout', user.logout);

module.exports = router;
