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

// router.post('/', function(req, res){
//   var userName = req.body.userName; //if either of these is empty redirect back to login and tell user!
//   var pword = req.body.pword;
//   var html = "";
//   var sql2 = 'SELECT * FROM Users (User_Id, PassWord) WHERE VALUES (\'' + userName + '\',\'' + pword + '\')';
//   var checkUser = "SELECT * FROM Users WHERE User_Id = " + "\'" + userName + "\' AND " + "PassWord = \'" + pword + '\'';
//   connection.query(checkUser, function(err, results) {
//     console.log(JSON.stringify(results));
//     console.log(checkUser);
//     if(results.length == 0)
//     {
//       html = 'Sorry, the Username or Password you entered are incorrect!\n';
//       console.log("\n\nDoesn't exist!\n\n");
//     }
//     else {
//       //Login - what does that mean?
//       console.log(JSON.stringify(results));
//       console.log(typeof userName);
//       html = 'Welcome back!' + userName + "!\n";
//     }
//     res.render('login_results', {results: html, title: "Results" });
//   });
// });

	router.post('/', passport.authenticate('local-login', {
            successRedirect : '/',
            failureRedirect : '/login'
		}),
        function(req, res) {
            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });
module.exports = router;
