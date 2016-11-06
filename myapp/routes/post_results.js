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
  //var userName = req.session.userName; //if any of these is empty, redirect back to formTest and tell user!
  var userName = req.body.userName;
  var post = req.body.post;
  var html = "";

<<<<<<< Updated upstream
  var checkUser = "SELECT * FROM Users WHERE User_Id = " + "\'" + userName + "\'";
  var sql2 = 'INSERT INTO Posts (post_id, author_id, content, internet_points) VALUES (NULL,\'' + userName + '\',\'' + post + '\', \'0\')';
=======
  //STEPHEN: We need to make the POSTS table ordered by the auto incrementing integer ID Key instead of by User.
  // If a single user has more than one Post, then their post will get over written by your sql2 below.  Also, this is all
  // kinds of not working at the moment. Not too much to fix, it's just completely broken because I want you to redo the db
  // first.

  var checkUser = "SELECT * FROM Users WHERE User_Id = " + "\'" + userName + "\'";
  var sql2 = 'INSERT INTO Posts (post_id, author_id, content) VALUES ( NULL, \'' + userName + '\',\'' + post + '\')';
>>>>>>> Stashed changes
  console.log(checkUser);
  console.log(sql2);
  // console.log(sql3);
  connection.query(sql2, function(err, results) {
    console.log(JSON.stringify(results));
    html = "Post created!\n";
<<<<<<< Updated upstream
    res.render('post_results', {results: html, title: "Post Results" , user: 'polygon'});
=======
    res.render('post_results', {results: html, title: "Post Results" });
>>>>>>> Stashed changes
  });
});

module.exports = router;
