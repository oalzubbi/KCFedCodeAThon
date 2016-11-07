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
  var verification;
  if(req.user != undefined){
    user = req.user[0].User_Id;}
    var sqlq = "SELECT * FROM Users WHERE User_Id = " + "\'" + user + "\'";
    console.log(sqlq);
    connection.query(sqlq, function(err, results) {
      console.log(JSON.stringify(results));
      console.log(sqlq);
      console.log(results[0].User_Id);
      console.log(results[0].LastName);
      console.log(results[0].Location);
      console.log(results[0].FirstName);
      console.log(results[0].Karma);
      console.log(results[0].Bio);
      if(results[0].Verified == 0)
      {
        verification = "Yes";
      }else{
        verification = "No";
      }

      res.render('Profile/userprofile', { title: "Profile",
                                           user:        results[0].User_Id,
                                           LastName:    results[0].LastName,
                                           FirstName:   results[0].FirstName,
                                           Location:    results[0].Location,
                                           Karma:       results[0].Karma,
                                           Verified:    verification,
                                           Bio:         results[0].Bio

                                        });
    });
});

module.exports = router;
