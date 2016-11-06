var express = require('express');
var router = express.Router();
// var http = require('http');
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
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  console.log(html);
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
               'Enter your Username:' +
               '<input type="text" name="userName" placeholder="bob" />' +
               '<br>' +
               'Enter your First Name:' +
               '<input type="text" name="f_name" placeholder="Bob" />' +
               '<br>' +
               'Enter your Last Name:' +
               '<input type="text" name="l_name" placeholder="Smith" />' +
               '<br>' +
               'Enter your Bio:' +
               '<input type="text" name="bio" placeholder="Hello" />' +
               '<br>' +
               'Enter your City:' +
               '<input type="text" name="city" placeholder="Lawrence" />' +
               '<br>' +
               'Enter your State Initials:' +
               '<input type="text" name="state" placeholder="KS" />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  var sql = 'SELECT * from Test';
  connection.query(sql, function(err, rows, fields) {
     var string = JSON.stringify(rows)
     if (err) throw err;
     m_rows = rows;
     console.log("ROWOOWOWOWOWOW");
    //  res.render('database', { title: 'database', rows: string });
  });
  console.log("Goodbye " + userName);
  res.render('formTest', {myform: html, title: "Register" });

});
