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
  var post = req.body.cmt;
  var html = "";
  var parentpost = 1;
  //var checkUser = "SELECT * FROM Users WHERE User_Id = " + "\'" + userName + "\'";
  var sql2 = 'INSERT INTO Comments (post_id, author_id, content, InternetPoints, Parent_id) VALUES (NULL,\'' + userName + '\',\'' + post + '\', \'0\', \'' + parentpost + '\')';
  console.log(sql2);
  // console.log(sql3);
  connection.query(sql2, function(err, results) {
    console.log(JSON.stringify(results));
    html = "Post created!\n";
    res.render('post_results', {results: html, title: "Post Results" });
  });
});

module.exports = router;
