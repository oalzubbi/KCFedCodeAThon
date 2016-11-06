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
var html = "check"
var htmlL ="</div></outerdiv>"
var sqlq = "SELECT * FROM Posts";

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query(sqlq, function(err, results) {
    console.log(JSON.stringify(results));
    /*resultVar = JSON.stringify(results);
    var lastChar = '\0';
    var inQuotes = false;
    [{"post_id":2,"content":"this a post","author_id":"wtf"},{"post_id":3,"content":"this a post","author_id":"wtf"},
    for(var i = 0;i < resultVar.length;i++){
      if(resultVar[i] == '{' && (lastChar == '[' || lastChar == ',') && !inQuotes){
        html += "<div>";
      }
        //html += "<div>" + JSON.stringify(JSONres[i]) + "</div>";
        lastChar = resultVar[i];
    }*/
    var htmlFin = "";
    htmlFin += htmlH + html + htmlL;
    res.render('index', {results: htmlFin, title: "Post Results" });
  });
//  res.render('index', { title: 'FED PROJECT',results: html });
});

module.exports = router;
