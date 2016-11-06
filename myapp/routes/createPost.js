var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res){

  var html = '<form action="/post_results" method="post">' +
               'Enter your Username:' +
               '<input type="text" name="userName" placeholder="bob" />' +
               '<br>' +
               'Enter your Post:' +
               '<textarea name="post" rows="4" cols="50">  </textarea>' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
  res.render('createPost', {myform: html, title: "Post Complete" });

});
