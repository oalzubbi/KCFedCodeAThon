var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
  res.render('about', { title: 'Express' , user: user});
});

module.exports = router;
