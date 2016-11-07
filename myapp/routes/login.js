var express = require('express');
var router = express.Router();

router.get('/', isLoggedIn, function(req, res){
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
  var html = '<form action="/login_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="username" placeholder="bob" />' +
               '<br>' +
               'Enter your Password:' +
               '<input type="password" name="password" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('login', {myform: html, title: "Login", user: user});

});

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (!req.isAuthenticated()) {
		return next();
  }
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;

	// if they aren't redirect them to the home page
res.render('index', { results: "<p></p> ", title: "Already Logged In", user: user});
  window.alert("You are already logged in.")
}

module.exports = router;
