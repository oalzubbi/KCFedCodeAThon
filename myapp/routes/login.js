var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', isLoggedIn, function(req, res){

  var html = '<form action="/login_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="username" placeholder="bob" />' +
               '<br>' +
               'Enter your Password:' +
               '<input type="text" name="password" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('login', {myform: html, title: "Login" });

});

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (!req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
