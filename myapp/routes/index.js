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

// ,{"post_id":13,"content":"I am trying \"to\" {break} this 'post by putting : symbols \" that [ match other ] symbols","author_id":"wtf"}]

/* GET home page. */
router.get('/', function(req, res, next) {
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
  connection.query(sqlq, function(err, results) {
    console.log(JSON.stringify(results));
  /*  resultVar = JSON.stringify(results);
    var lastChar = '\0';
    var inQuotes = false;
    var inPost = false;
    var pageCount = 0;
    var postsOnPage = 0;
    //initial page
    html+="<div class = \"content_" + (pageCount + 1) + "\" >"
    for(var i = 0;i < resultVar.length;i++){
      //takes care of the beginning of a new post
      if(resultVar[i] == '{' && (lastChar == '[' || lastChar == ',') && !inQuotes){
        html += "<div>";
        inPost = true;
      }
      //end of post
      else if(resultVar[i] == '}' && !inQuotes ){
          html += "</div>"
          postsOnPage++;
          inPost = false;
      } else if (inPost){
          //begin table
        //take care of ignoring post id, get content, get author id, get internetPoints
        // ,{"post_id":13,"content":"I am trying \"to\" {break} this 'post by putting : symbols \" that [ match other ] symbols","author_id":"wtf"}]
          //skip over post id, get to end of content
          html += "<table>"
          while(resultVar[i] != ':' && resultVar[i-1] != '"' && resultVar[i-2] != 't'){
            i++;
          }
          //in content now
          if(resultVar[i] == '"'){
            html += "<tr>";
            html += "<td>";
            //add in content

          }
      }
        //html += "<div>" + JSON.stringify(JSONres[i]) + "</div>";
      //take care of pages here
      if(postsOnPage % 10 == 0 && postsOnPage > 0) {
            pageCount++;
            //close div on content page and start next
            html+="</div> <div class = \"content_" + (pageCount + 1) + "\" >"
      }
        lastChar = resultVar[i];
    }*/

    //close last div
    html+="</div>";
    var htmlFin = htmlH + html + htmlL;
    console.log(html);
    res.render('index', {results: html, title: "Post Results", user: user});
  });
//  res.render('index', { title: 'FED PROJECT',results: html });
});

module.exports = router;
