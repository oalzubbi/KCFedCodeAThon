var db = require('../database');
var express = require('express');
var router = express.Router();
mysql = require('mysql');
var passport = require('passport');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});


var sql = 'SELECT * from Users';
connection.connect();
router.get('/', function(req, res, next) {
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
  connection.query(sql, function(err, rows, fields, req) {
    var string = JSON.stringify(rows);
    var m_rows = "" + rows.value_1;
    // var m_rows = JSON.stringify(rows.value_1);
    if (err) throw err;
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];

    // var current_user = req.user;
    res.render('database', { title: 'database', rows: string, drinks: drinks, user: user });
  });
});
/*
router.get('/', function(req, res, next) {
  res.render('database');
  console.log(results);
});
*/
// route middleware to make sure
function isLoggedIn(req, res, next) {
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()) {
		return next();
  }

	// if they aren't redirect them to the home page
	res.redirect('/login', {user: 'polygon'});
}


module.exports = router;
