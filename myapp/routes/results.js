var express = require('express');
var router = express.Router();
mysql = require('mysql');
passport = require('passport');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'swiss',
  password: 'Password123!',
  database: 'swiss',
});

router.post('/', passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/formTest'
}),    function(req, res) {
        var user;
        console.log(JSON.stringify(req));
        if(req.user != undefined)
          user = req.user[0].username;
        res.redirect('/', {results: res, user: user});

});

module.exports = router;
