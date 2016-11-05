var db = require('../database');
var express = require('express');
var router = express.Router();
mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});


var sql = 'SELECT * from Test';
connection.connect();
router.get('/', function(req, res, next) {
  connection.query(sql, function(err, rows, fields) {
    var string = JSON.stringify(rows)
    if (err) throw err;
    res.render('database', { title: 'database', rows: string });
    console.log(rows);
  });
});
/*
router.get('/', function(req, res, next) {
  res.render('database');
  console.log(results);
});
*/
module.exports = router;
