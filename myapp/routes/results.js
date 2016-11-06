var express = require('express');
var router = express.Router();
mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});

module.exports = router;

/*
 * body-parser is a piece of express middleware that
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body`
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');



// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
router.post('/', function(req, res){
  console.log("POOOOOOSTED");
  var userName = req.body.userName;
  var f_name = req.body.f_name;
  var l_name = req.body.l_name;
  var bio = req.body.bio;
  var city = req.body.city;
  var state = req.body.state;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  console.log(userName + "\n");
  connection.connect();
  var sql2 = 'INSERT INTO Users (User_Id, LastName, FirstName, Karma, Verified, Bio, Location) VALUES (\'' + userName + '\',\'' + l_name + '\', \'' + f_name + '\', \'0\' , \'0\' , \'' + bio + '\', \'' + (city + state) + '\')';
  console.log(sql2);
  connection.query(sql2, function(err, rows, fields) {
     var string = JSON.stringify(rows)
     if (err) throw err;
     console.log("ROWOOWOWOWOWOW");
    //  res.render('database', { title: 'database', rows: string });
  });
  res.send(html);
});

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
router.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var m_rows = 0;
  var userName = 0;
  // var userName = req.body.userName;
  var html = '<form action="/results" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  connection.connect();
  var sql = 'SELECT * from Test';
  var sql2 = 'INSERT INTO Test (value_1) VALUES(' + userName + ')';
  connection.query(sql, function(err, rows) {
     if (err) throw err;
     console.log("ROWOOWOWOWOWOW");
    //  res.render('database', { title: 'database', rows: string });
  });
  res.send(html);
});
