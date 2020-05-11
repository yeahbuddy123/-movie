var express = require('express');
var userController=require('../controllers/user.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',userController.login);
router.post('/register',userController.register);
router.get('/verify',userController.verify);
router.get('/logout',userController.logout);
router.get('/getUser',userController.getUser);
router.post('/findPassword',userController.findPassword);

module.exports = router;
