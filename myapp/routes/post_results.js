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
  var userName = req.session.userName; //if any of these is empty, redirect back to formTest and tell user!
  var post = req.body.post;
  var html = "";
  var sql2 = 'INSERT into POSTS (User_Id, Post) WHERE VALUES (\'' + userName + '\',\'' + pword + '\')';
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
