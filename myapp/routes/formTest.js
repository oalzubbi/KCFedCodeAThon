var express = require('express');
var router = express.Router();


module.exports = router;

router.get('/', function(req, res){
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;

  var html = '<form action="/results" method="post">' +
               '<table style="width:100%;" border="0"><col width="220"><tr><td>Enter your Username:</td>' +
               '<td style="height: 50px;"><input type="text" name="username" placeholder="Bob" /></td>' +
               '<td style="height: 50px;">Enter your Password:</td>' +
               '<td style="height: 50px;"><input type="text" name="password" placeholder="..." /></td></tr>' +
               '<tr>' +
               '<td style="height: 50px;">Enter your First Name:' +
               '<td style="height: 50px;"><input type="text" name="FirstName" placeholder="Bob" /></td>' +
               '<td style="height: 50px;">Enter your Last Name:' +
               '<td style="height: 50px;"><input type="text" name="LastName" placeholder="Smith" /></td></tr>' +
               '<tr>' +
               '<td style="height: 50px;">Enter your State Initials:' +
               '<td style="height: 50px;"><input type="text" name="state" placeholder="KS" /></td>' +
               '<td style="height: 50px;">Enter your City:' +
               '<td style="height: 50px;"><input type="text" name="city" placeholder="Lawrence" /></td></tr>' +
               '<tr>' +
               '<td style="height: 50px;">Enter your Bio:' +
               '<td style="height: 50px;"><textarea name="bio" placeholder="Hello" /></textarea></td></tr>' +
               '</table>' +
               '<button style="color:black;" type="submit">Submit</button>' +
            '</form>';


  res.render('formTest', {myform: html, title: "Register" , user: user});


});
