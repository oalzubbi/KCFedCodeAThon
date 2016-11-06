var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
  res.render('Profile/userprofile', { title: "Profile", user: user });
});

module.exports = router;
