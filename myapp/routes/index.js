var express = require('express');
var router = express.Router();
mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});
var htmlH = "<outerdiv><div id = \"postContent \">";
var html = ""
var sqlq = "SELECT * FROM Posts";

router.get('/', function(req, res, next) {
  var user;
  if(req.user){
    console.log(JSON.stringify(req.user));
    user = req.user[0].User_Id;}
    connection.query(sqlq, function(err, results) {
    var current_post;
    var string = "";
    string = '<table style="width:100%"  border="1">';
    for(var i = 0; i < results.length; i++)
    {
      current_post = results[i];
      string += '<form action="/postpage" method="post" name="pid" placeholder=' + i + '><tr><td>Author: ' + current_post.author_id+ '</td>';
      string += "<td rowspan='2'>Popularity: " + current_post.internet_points + "</td><td rowspan='2'><button type='submit'>Join</button></td></tr>";
      string += '<tr colspan="2" rowspan="2"><td>' + current_post.content + "</td></tr></form>";
    }
    string += "</table>";
    var html = string;

    res.render('index', {results: html, title: "Front Page", user: user});
  });
});

module.exports = router;
