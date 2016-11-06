var express = require('express');
var router = express.Router();
mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});

router.post('/', function(req, res){
  var userName = req.body.userName;
  var pword = req.body.pword;
  var f_name = req.body.f_name;
  var l_name = req.body.l_name;
  var bio = req.body.bio;
  var city = req.body.city;
  var state = req.body.state;
  var html = "";
  var sql2 = 'INSERT INTO Users (User_Id, LastName, FirstName, Karma, Verified, Bio, Location, PassWord) VALUES (\'' + userName + '\',\'' + l_name + '\', \'' + f_name + '\', \'0\' , \'0\' , \'' + bio + '\', \'' + (city + state) + '\', \'' + pword + '\')';
  var checkUser = "SELECT * FROM Users WHERE User_Id = " + "\'" + userName + "\'"
  connection.query(checkUser, function(err, results) {
    if(results.length > 0)
    {
      html = 'Sorry, ' + f_name + ', the Username ' + userName + " is already taken by another user!\n";
      console.log("\n\nAlready exist!\n\n");
    }
    else {
      connection.query(sql2, function(err, rows, fields) {});
      html = 'Hello, ' + f_name + '!.<br>' +
                 'Your username is ' + userName + '.<br>' +
                 '<a href="/"></a>';
      console.log("\n\nDoesn't exists!\n\n");
    }
    res.render('results', {results: html, title: "Results" });
  });
});
module.exports = router;
