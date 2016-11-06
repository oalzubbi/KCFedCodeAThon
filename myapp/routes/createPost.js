var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res){
<<<<<<< Updated upstream
  var user;
  if(req.user != undefined)
    user = req.user[0].User_Id;
=======

>>>>>>> Stashed changes
  var html = '<form action="/post_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="userName" placeholder="bob" />' +
               '<br>' +
               'Enter your Post:' +
<<<<<<< Updated upstream
               '<textarea name="post" rows="4" cols="50">  </textarea>' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('createPost', {myform: html, title: "Post Complete" , user: user});
=======
               '<input type="text" name="post" placeholder="Hello" />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('createPost', {myform: html, title: "Post Complete" });
>>>>>>> Stashed changes

});
