var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res){
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
  var html = '<br><br><form action="/post_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="userName" placeholder="bob" />' +
               '<br><br><br>' +
               'Enter your Post:' +
               '<textarea name="post" rows="4" cols="50">  </textarea>' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('createPost', {myform: html, title: "Post Complete" , user: user});

});
