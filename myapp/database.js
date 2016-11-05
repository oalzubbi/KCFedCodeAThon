var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
  connectionLimit: 1000,
  supportBigNumbers: true
});

// Get records from a city
exports.getRecords = function(city, callback) {
  var sql = "SELECT name FROM test WHERE city=?";
  // get a connection from the pool
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, [city], function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
};
