var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res){

  var html = '<form action="/login_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="userName" placeholder="bob" />' +
               '<br>' +
               'Enter your Password:' +
               '<input type="text" name="pword" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('login', {myform: html, title: "Login" });

});
