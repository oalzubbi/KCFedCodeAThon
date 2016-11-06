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
  var user;
  if(req.user != undefined)
    user = req.user;
  //var userName = req.session.userName; //if any of these is empty, redirect back to formTest and tell user!
  var userName = req.body.userName;
  var post = req.body.post;
  var html = "";

  var checkUser = "SELECT * FROM Users WHERE User_Id = " + "\'" + userName + "\'";
  var sql2 = 'INSERT INTO Posts (post_id, author_id, content, internet_points) VALUES (NULL,\'' + userName + '\',\'' + post + '\', \'0\')';
  connection.query(sql2, function(err, results) {
    var user;
    if(results.user != undefined)
      user = results.user[0].User_Id;
    console.log(JSON.stringify(results));
    html = "Post created!\n";
    res.render('post_results', {results: html, title: "Post Results" , user: 'polygon'});
  });
});

module.exports = router;
