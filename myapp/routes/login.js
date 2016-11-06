var express = require('express');
var router = express.Router();

<<<<<<< Updated upstream

router.get('/', isLoggedIn, function(req, res){
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
=======
module.exports = router;

router.get('/', isLoggedIn, function(req, res){

>>>>>>> Stashed changes
  var html = '<form action="/login_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="username" placeholder="bob" />' +
               '<br>' +
               'Enter your Password:' +
               '<input type="text" name="password" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
<<<<<<< Updated upstream
  res.render('login', {myform: html, title: "Login", user: user});
=======
  res.render('login', {myform: html, title: "Login" });
>>>>>>> Stashed changes

});

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
<<<<<<< Updated upstream
	if (!req.isAuthenticated()) {
		return next();
  }
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;

	// if they aren't redirect them to the home page
res.render('index', {title: "FED PROJECT", user: user});
  window.alert("You are already logged in.")
}

module.exports = router;
=======
	if (!req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
>>>>>>> Stashed changes
