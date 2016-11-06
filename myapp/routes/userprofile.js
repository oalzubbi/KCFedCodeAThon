var express = require('express');
var router = express.Router();
mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});
router.get('/', function(req, res, next) {
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
    var sqlq = "SELECT  FROM Users WHERE User_Id = " + "\'" + user + "\'";
    console.log(sqlq);
    connection.query(sqlq, function(err, results) {
      console.log(JSON.stringify(results));
      console.log(sqlq);
      res.render('Profile/userprofile', { title: "Profile", user: user });
    });
});

module.exports = router;
