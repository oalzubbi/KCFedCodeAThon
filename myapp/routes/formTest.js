var express = require('express');
var router = express.Router();


module.exports = router;

router.get('/', function(req, res){
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
  var html = '<form action="/results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="username" placeholder="bob" />' +
               '<br>' +
               'Enter your Password:' +
               '<input type="text" name="password" placeholder="..." />' +
               '<br>' +
               'Enter your First Name:' +
               '<input type="text" name="FirstName" placeholder="Bob" />' +
               '<br>' +
               'Enter your Last Name:' +
               '<input type="text" name="LastName" placeholder="Smith" />' +
               '<br>' +
               'Enter your Bio:' +
               '<input type="text" name="bio" placeholder="Hello" />' +
               '<br>' +
               'Enter your City:' +
               '<input type="text" name="city" placeholder="Lawrence" />' +
               '<br>' +
               'Enter your State Initials:' +
               '<input type="text" name="state" placeholder="KS" />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';


  res.render('formTest', {myform: html, title: "Register" , user: user});

});
