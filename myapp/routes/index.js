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
    //console.log(JSON.stringify(req.user));
    user = req.user[0].User_Id;}
    connection.query(sqlq, function(err, results) {
    var current_post;
    var string = "";
    string = '<table id="front" style="width:100%"  border="0">';
    for(var i = 0; i < results.length; i++)
    {
      current_post = results[i];
      string += '<form action="/postpage" method="post" name="pid" placeholder=' + i + '><tr><td class='author' height='15'>Author: ' + current_post.author_id+ '</td>';
      string += "<td class ='pop' height='35' rowspan='2'>Popularity: " + current_post.internet_points + "</td><td rowspan='2'><button type='submit'>Join</button></td></tr>";
      string += '<tr colspan="2" rowspan="2"><td height="35">' + current_post.content + "</td></tr></form>";
    }
    string += "</table>";
    var html = string;

    res.render('index', {results: html, title: "Front Page", user: user});
  });
});


function popularitySort(A) {
    var N = A.length;
    if (N < 2) { return; }
    var leastInx = 0
    var leastID = A[0].internet_points;
    for (var i = 1; i < N; ++i) {
        var thisID = A[i].internet_points;
        if (thisID < leastID) {
            leastInx = i; leastID = thisID; }}
    var tmp = A[0];
    A[0] = A[leastInx];
    A[leastInx] = tmp;
    for (i = 2; i < N; ++i) {
        tmp = A[i];
        //console.log(tmp);
        for (var j = i; A[j-1].internet_points > tmp.internet_points; --j) {
            A[j] = A[j-1]; }
        A[j] = tmp; }
}
module.exports = router;
