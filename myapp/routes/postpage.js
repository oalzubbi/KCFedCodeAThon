var express = require('express');
var router = express.Router();
mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});
router.post('/', function(req, res, next) {
    var sqlq = "SELECT * FROM Comments WHERE Parent_id = " + req.body.pid;
    console.log(JSON.stringify(sqlq));
    var user;
    var html;
    if(req.user){
      user = req.user[0].User_Id;}
    connection.query(sqlq, function(err, results) {
      if(results) {
        var current_post;
        var string = "";
        string = '<table style="width:100%"  border="1">';
        for(var i = 0; i < results.length; i++)
        {
          current_post = results[i];
          string += '<tr><td>Author: ' + current_post.author_id+ '</td>';
          string += "<td rowspan='2'>Popularity: " + current_post.internet_points + "</td><td rowspan='2'></td></tr>";
          string += '<tr colspan="2" rowspan="2"><td>' + current_post.content + "</td></tr>";
        }
        string += "</table>";
        html = string;
      }
      else {
        htmp = "";
      }


      res.render('postpage', {results: html, user: user, title: "Event Posting"});
    });
});

router.post('/', function(req, res, next) {
    var sqlq = "SELECT * FROM Comments WHERE Parent_id = " + req.body.pid;
    console.log(JSON.stringify(sqlq));
    var user;
    var html;
    if(req.user){
      user = req.user[0].User_Id;}
    connection.query(sqlq, function(err, results) {
      if(results) {
        var current_post;
        var string = "";
        string = '<table style="width:100%"  border="1">';
        for(var i = 0; i < results.length; i++)
        {
          current_post = results[i];
          string += '<tr><td>Author: ' + current_post.author_id+ '</td>';
          string += "<td rowspan='2'>Popularity: " + current_post.internet_points + "</td><td rowspan='2'></td></tr>";
          string += '<tr colspan="2" rowspan="2"><td>' + current_post.content + "</td></tr>";
        }
        string += "</table>";
        html = string;
      }
      else {
        htmp = "";
      }


      res.render('postpage', {results: html, user: user, title: "Event Posting"});
    });
});

module.exports = router;
