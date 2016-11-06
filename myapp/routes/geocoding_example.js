var express = require('express');
var router = express.Router();

/* GET geocoding_example page. */
router.get('/', function(req, res, next) {
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
  res.render('geocoding_example', { title: 'Express' , user: user});
});

module.exports = router;
