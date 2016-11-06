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


var sql = 'SELECT * from Users';
connection.connect();
router.get('/', function(req, res, next) {
  connection.query(sql, function(err, rows, fields) {
    var string = JSON.stringify(rows);
    var m_rows = "" + rows.value_1;
    // var m_rows = JSON.stringify(rows.value_1);
    if (err) throw err;
    res.render('database', { title: 'database', rows: string });
    console.log("WHAHHAT" + rows[0].value_1);
  });
});
/*
router.get('/', function(req, res, next) {
  res.render('database');
  console.log(results);
});
*/
module.exports = router;
